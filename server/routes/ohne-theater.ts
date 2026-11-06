// Eigenständige Kampagnenseite: Skripte und Bilder liegen in public/ohne-theater
export default defineEventHandler(async (event) => {
  const html = await useStorage('assets:server').getItem<string>('ohne-theater.html')
  if (!html) throw createError({ statusCode: 404 })
  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return html
})
