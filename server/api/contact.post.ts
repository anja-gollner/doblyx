import { Resend } from 'resend'

// Nutzereingaben vor dem Einfügen ins E-Mail-HTML entschärfen
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .slice(0, 5000)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, company, email, phone, message, founding, website } = body ?? {}

  // Honeypot ausgefüllt → Bot. Erfolg vortäuschen, nichts senden.
  if (website) {
    return { success: true }
  }

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    throw createError({ statusCode: 400, message: 'Name, gültige E-Mail und Nachricht sind erforderlich.' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    throw createError({ statusCode: 500, message: 'Email service not configured.' })
  }

  const resend = new Resend(resendApiKey)

  const rows: [string, string][] = [
    ['Name', escapeHtml(name)],
    ['Unternehmen', escapeHtml(company) || '–'],
    ['E-Mail', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`],
    ['Telefon', escapeHtml(phone) || '–'],
    ['Gründungskunden-Programm', founding ? 'Ja, interessiert' : 'Nein'],
    ['Größter Zeitfresser', escapeHtml(message).replace(/\n/g, '<br>')],
  ]

  const subjectName = String(name).replace(/[\r\n]/g, ' ').slice(0, 100)
  const subjectCompany = company ? ` (${String(company).replace(/[\r\n]/g, ' ').slice(0, 100)})` : ''

  const { data, error } = await resend.emails.send({
    // Absender über RESEND_FROM (z. B. 'Doblyx Website <website@doblyx.com>'), sobald die Domain in Resend bestätigt ist
    from: process.env.RESEND_FROM || 'Doblyx Website <onboarding@resend.dev>',
    to: 'office@doblyx.com',
    subject: `${founding ? '⭐ Gründungskunde – ' : ''}Potenzial-Check: ${subjectName}${subjectCompany}`,
    replyTo: String(email),
    html: `
      <h2>Neue Anfrage für einen Potenzial-Check</h2>
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
    throw createError({ statusCode: 500, message: error.message })
  }

  return { success: true, id: data?.id }
})
