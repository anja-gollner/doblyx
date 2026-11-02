// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

// Test-Version (z. B. mydoblyx.com): `npm run build:staging` – für Suchmaschinen komplett gesperrt
const isStaging = process.env.SITE_ENV === 'staging'
const description = 'Doblyx automatisiert wiederkehrende Aufgaben mit KI: Anfragen, Angebote, Dokumente. Maßgeschneidert, DSGVO-konform, persönlich betreut aus Österreich. Jetzt kostenloses Erstgespräch vereinbaren.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  // Test-Version: zusätzlich Sperr-Header und eine robots.txt, die alles verbietet
  routeRules: {
    '/**': {
      headers: {
        // Sicherheits-Header für alle Seiten
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://cloud.umami.is",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev https://gateway.umami.is",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
        ].join('; '),
        ...(isStaging ? { 'X-Robots-Tag': 'noindex, nofollow' } : {}),
      },
    },
  },

  hooks: {
    'nitro:build:public-assets'(nitro) {
      if (isStaging) writeFileSync(join(nitro.options.output.publicDir, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
    },
  },

  site: {
    url: 'https://doblyx.com',
    name: 'Doblyx AI',
  },

  sitemap: {
    // Rechtsseiten sind noindex und gehören nicht in die Sitemap
    exclude: ['/impressum', '/datenschutz'],
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },

  nitro: {
    prerender: {
      routes: ['/', '/prozess', '/impressum', '/datenschutz'],
    },
  },

  googleFonts: {
    families: {
      'Instrument+Serif': { wght: [400], ital: [400] },
      Inter: [300, 400, 500, 600],
      'JetBrains+Mono': [400, 500],
    },
    display: 'swap',
    download: true,
  },

  app: {
    head: {
      title: 'KI-Automatisierung für Unternehmen in Österreich | Doblyx AI',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#02070A' },
        { name: 'robots', content: isStaging ? 'noindex, nofollow' : 'index, follow' },
        { name: 'author', content: 'Doblyx AI GmbH' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Doblyx AI: Arbeit, die sich von selbst erledigt.' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: 'https://doblyx.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Doblyx AI' },
        { property: 'og:locale', content: 'de_AT' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Doblyx AI: Arbeit, die sich von selbst erledigt.' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: 'https://doblyx.com/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/logo-icon-dark.svg' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ProfessionalService',
                '@id': 'https://doblyx.com/#organization',
                name: 'Doblyx AI GmbH',
                alternateName: 'Doblyx',
                url: 'https://doblyx.com',
                logo: 'https://doblyx.com/logos/logo-final-dark.svg',
                image: 'https://doblyx.com/founder.jpg',
                description,
                slogan: 'Arbeit, die sich von selbst erledigt.',
                founder: { '@id': 'https://doblyx.com/#founder' },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Schildbach 42',
                  addressLocality: 'Hartberg',
                  postalCode: '8230',
                  addressRegion: 'Steiermark',
                  addressCountry: 'AT',
                },
                email: 'office@doblyx.com',
                telephone: '+43-676-5800866',
                areaServed: [
                  { '@type': 'Country', name: 'Österreich' },
                  { '@type': 'Country', name: 'Deutschland' },
                  { '@type': 'Country', name: 'Schweiz' },
                ],
                availableLanguage: ['de'],
                knowsAbout: ['KI-Automatisierung', 'Prozessautomatisierung', 'Workflow-Automatisierung', 'CRM-Integration', 'KI-Assistenten', 'Dokumentenverarbeitung mit KI', 'Lead-Management'],
                sameAs: ['https://www.linkedin.com/in/eric-dobler/'],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Leistungen',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisierung von Vertrieb & Anfragen', description: 'Anfragen sofort erfassen, vorqualifizieren und beantworten; Kontakte automatisch im CRM, Termine im Kalender.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisierung von Backoffice & Dokumenten', description: 'KI liest Rechnungen, Verträge und Formulare aus und überträgt die Daten in die richtigen Systeme.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KI-Assistenten & Schnittstellen', description: 'Interne KI-Assistenten mit Firmenwissen und Schnittstellen zwischen bestehenden Programmen.' } },
                    { '@type': 'Offer', name: 'Kostenloses Erstgespräch', price: '0', priceCurrency: 'EUR', description: '30-minütiges Gespräch: Wo geht Zeit verloren und lohnt sich Automatisierung?' },
                    { '@type': 'Offer', name: 'KI-Umsetzungsanalyse', price: '1490', priceCurrency: 'EUR', description: 'Detaillierte Aufnahme der Abläufe und fertiger Umsetzungsplan mit Aufwand, Kosten und erwarteter Ersparnis.' },
                  ],
                },
              },
              {
                '@type': 'Person',
                '@id': 'https://doblyx.com/#founder',
                name: 'Eric Dobler',
                jobTitle: 'Gründer & Geschäftsführer',
                worksFor: { '@id': 'https://doblyx.com/#organization' },
                description: 'Gründer von Doblyx AI. Ehemaliger Skirennläufer, Matura an einer Skisportschule; heute spezialisiert auf KI-Automatisierung und Softwareentwicklung für Unternehmen.',
                image: 'https://doblyx.com/founder.jpg',
                sameAs: ['https://www.linkedin.com/in/eric-dobler/'],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://doblyx.com/#website',
                url: 'https://doblyx.com',
                name: 'Doblyx AI',
                inLanguage: 'de-AT',
                publisher: { '@id': 'https://doblyx.com/#organization' },
              },
            ],
          }),
        },
      ],
    },
  },
})
