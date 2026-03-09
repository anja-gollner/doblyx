import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, company, email, phone, message } = body

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, message: 'Name, email and message are required.' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    throw createError({ statusCode: 500, message: 'Email service not configured.' })
  }

  const resend = new Resend(resendApiKey)

  await resend.emails.send({
    from: 'Doblyx Website <noreply@doblyx.com>',
    to: 'office@doblyx.com',
    subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ''}`,
    replyTo: email,
    html: `
      <h2>Neue Kontaktanfrage über doblyx.com</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Unternehmen</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${company || '–'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">E-Mail</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || '–'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Nachricht</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #999; font-size: 12px;">Gesendet über das Kontaktformular auf doblyx.com</p>
    `,
  })

  return { success: true }
})
