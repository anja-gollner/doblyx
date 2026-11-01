import { Resend } from 'resend'

// Maximale Länge je Feld (Zeichen); größere Anfragen werden abgelehnt
const LIMITS = { name: 120, company: 160, email: 200, phone: 40, message: 4000 }
const MAX_BODY_BYTES = 20_000

// Einfache Mengenbegrenzung pro IP gegen Spam-Fluten (pro Server-Instanz)
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

// Nutzereingaben vor dem Einfügen ins E-Mail-HTML entschärfen
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Nur echte Texte innerhalb der Längengrenze akzeptieren
function text(value: unknown, max: number): string | null {
  if (value === undefined || value === null || value === '') return ''
  if (typeof value !== 'string' || value.length > max) return null
  return value.trim()
}

export default defineEventHandler(async (event) => {
  const length = Number(getRequestHeader(event, 'content-length') || 0)
  if (length > MAX_BODY_BYTES) {
    throw createError({ statusCode: 413, message: 'Anfrage zu groß.' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unbekannt'
  if (isRateLimited(ip)) {
    throw createError({ statusCode: 429, message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' })
  }

  const body = await readBody(event)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, message: 'Ungültige Anfrage.' })
  }

  // Honeypot ausgefüllt → Bot. Erfolg vortäuschen, nichts senden.
  if (body.website) {
    return { success: true }
  }

  const name = text(body.name, LIMITS.name)
  const company = text(body.company, LIMITS.company)
  const email = text(body.email, LIMITS.email)
  const phone = text(body.phone, LIMITS.phone)
  const message = text(body.message, LIMITS.message)
  const founding = body.founding === true

  if (
    [name, company, email, phone, message].some((v) => v === null)
    || !name || !email || !message
    || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)
  ) {
    throw createError({ statusCode: 400, message: 'Name, gültige E-Mail und Nachricht sind erforderlich.' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.error('[contact] RESEND_API_KEY fehlt')
    throw createError({ statusCode: 500, message: 'Senden derzeit nicht möglich.' })
  }

  const resend = new Resend(resendApiKey)

  const rows: [string, string][] = [
    ['Name', escapeHtml(name)],
    ['Unternehmen', company ? escapeHtml(company) : '–'],
    ['E-Mail', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`],
    ['Telefon', phone ? escapeHtml(phone) : '–'],
    ['Gründungskunden-Programm', founding ? 'Ja, interessiert' : 'Nein'],
    ['Größter Zeitfresser', escapeHtml(message!).replace(/\n/g, '<br>')],
  ]

  const subjectName = name.replace(/[\r\n]/g, ' ').slice(0, 100)
  const subjectCompany = company ? ` (${company.replace(/[\r\n]/g, ' ').slice(0, 100)})` : ''

  const { data, error } = await resend.emails.send({
    // Absender über RESEND_FROM (z. B. 'Doblyx Website <website@doblyx.com>'), sobald die Domain in Resend bestätigt ist
    from: process.env.RESEND_FROM || 'Doblyx Website <onboarding@resend.dev>',
    to: 'office@doblyx.com',
    subject: `${founding ? '⭐ Gründungskunde: ' : ''}Erstgespräch: ${subjectName}${subjectCompany}`,
    replyTo: email,
    html: `
      <h2>Neue Anfrage für ein Erstgespräch</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        ${rows.map(([label, value]) => `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top;">${label}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${value}</td>
        </tr>`).join('')}
      </table>
      <p style="margin-top: 20px; color: #999; font-size: 12px;">Gesendet über das Kontaktformular auf doblyx.com</p>
    `,
  })

  if (error) {
    // Details nur ins Server-Log, nicht an den Besucher
    console.error('[contact] Resend-Fehler:', error.message)
    throw createError({ statusCode: 500, message: 'Senden derzeit nicht möglich.' })
  }

  return { success: true, id: data?.id }
})
