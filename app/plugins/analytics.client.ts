// Umami Analytics: ohne Cookies, DSGVO-freundlich, kein Banner nötig.
// Aktiv nur, wenn in app/utils/site.ts eine Website-ID steht, und nur auf doblyx.com (nicht lokal).
export default defineNuxtPlugin(() => {
  const websiteId = site.umamiWebsiteId
  if (!websiteId) return

  useHead({
    script: [{
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': websiteId,
      'data-domains': 'doblyx.com,www.doblyx.com',
    }],
  })

  // Wichtige Klicks automatisch zählen, mit Abschnitt als Quelle
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('a')
    if (!link) return
    const href = link.getAttribute('href') || ''
    const quelle = link.closest('header') ? 'navigation' : link.closest('footer') ? 'footer' : link.closest('section')?.id || 'hero'

    if (href.endsWith('#kontakt')) trackEvent('erstgespraech-klick', { quelle })
    else if (href.startsWith('tel:')) trackEvent('anruf-klick', { quelle })
    else if (href.startsWith('mailto:')) trackEvent('email-klick', { quelle })
    else if (href.includes('linkedin.com')) trackEvent('linkedin-klick', { quelle })
  }, { capture: true })
})
