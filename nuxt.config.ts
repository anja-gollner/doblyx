// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://doblyx.com',
    name: 'Doblyx AI',
  },

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },

  nitro: {
    prerender: {
      routes: ['/', '/de', '/en', '/impressum', '/datenschutz', '/agb', '/en/impressum', '/en/datenschutz', '/en/agb'],
    },
  },

  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'de',
    lazy: true,
    strategy: 'prefix_except_default',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'DM+Sans': [400, 500, 700],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Doblyx AI — KI-Systemarchitekturen für skalierbares Wachstum',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { name: 'description', content: 'Doblyx AI baut intelligente Systemarchitekturen für wachstumsstarke Unternehmen. Revenue Automation, Operational Intelligence & Executive AI Advisory — messbare Ergebnisse in unter 4 Wochen.' },
        { name: 'theme-color', content: '#0A1F44' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Doblyx AI' },

        // Keywords (SEO)
        { name: 'keywords', content: 'KI Beratung Unternehmen, KI Strategie Mittelstand, Workflow Automation, Prozessautomatisierung KI, n8n Automation, Lead Automation, CRM Integration KI, AI Consulting Austria, KI Systemarchitektur, Enterprise AI, Doblyx AI' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Doblyx AI — Architects of Scalable Growth' },
        { property: 'og:description', content: 'Intelligente Systemarchitekturen für Unternehmen, die schneller wachsen wollen als ihr Headcount. Revenue Automation, Operational Intelligence & AI Advisory.' },
        { property: 'og:image', content: 'https://doblyx.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://doblyx.com' },
        { property: 'og:site_name', content: 'Doblyx AI' },
        { property: 'og:locale', content: 'de_AT' },
        { property: 'og:locale:alternate', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Doblyx AI — Architects of Scalable Growth' },
        { name: 'twitter:description', content: 'KI-Systemarchitekturen für skalierbares Wachstum. Messbare Ergebnisse in unter 4 Wochen.' },
        { name: 'twitter:image', content: 'https://doblyx.com/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://doblyx.com' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/logo-icon-dark.svg' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Doblyx AI',
            url: 'https://doblyx.com',
            logo: 'https://doblyx.com/logos/logo-final-dark.svg',
            description: 'Intelligente KI-Systemarchitekturen für wachstumsstarke Unternehmen. Revenue Automation, Operational Intelligence & Executive AI Advisory.',
            foundingDate: '2024',
            founder: {
              '@type': 'Person',
              name: 'Eric Dobler',
              jobTitle: 'Founder & CEO',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Schildbach 42',
              addressLocality: 'Hartberg',
              postalCode: '8230',
              addressCountry: 'AT',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'office@doblyx.com',
              telephone: '+43-676-5800866',
              contactType: 'sales',
              availableLanguage: ['German', 'English'],
            },
            sameAs: [],
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 47.2839,
                longitude: 15.9667,
              },
              geoRadius: '500',
            },
            knowsAbout: [
              'Artificial Intelligence',
              'Process Automation',
              'Workflow Automation',
              'CRM Integration',
              'AI Strategy',
              'n8n',
              'Enterprise AI',
              'Lead Automation',
            ],
            serviceType: [
              'Revenue System Architecture',
              'Operational Intelligence',
              'Executive AI Advisory',
            ],
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Doblyx AI',
            url: 'https://doblyx.com',
            inLanguage: ['de-DE', 'en-US'],
          }),
        },
      ],
    },
  },
})
