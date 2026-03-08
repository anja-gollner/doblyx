export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, company, email, phone, message } = body

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, message: 'Name, email and message are required.' })
  }

  // Send email notification via mailto link data
  // For production, integrate with a service like Resend, SendGrid, or SMTP
  console.log('New contact form submission:', {
    name,
    company,
    email,
    phone,
    message,
    timestamp: new Date().toISOString(),
  })

  return { success: true }
})
