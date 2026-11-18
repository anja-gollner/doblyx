// Zentrale SEO-Daten: Hauptdomain, Beschreibung und strukturierte Daten (JSON-LD)
// Wird von nuxt.config.ts und app.vue genutzt, deshalb ohne Nuxt-Auto-Imports.

// Hauptdomain: doblyx.com leitet in Vercel dauerhaft (308) hierher weiter
export const SITE_URL = 'https://www.doblyx.com'

export const description = 'Doblyx automatisiert wiederkehrende Aufgaben mit KI: Anfragen, Angebote, Dokumente. Maßgeschneidert und DSGVO-konform aus Österreich. Kostenloses Erstgespräch.'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Doblyx AI GmbH',
      alternateName: 'Doblyx',
      url: SITE_URL,
      logo: `${SITE_URL}/logos/logo-final-dark.svg`,
      image: `${SITE_URL}/founder.jpg`,
      description,
      slogan: 'Arbeit, die sich von selbst erledigt.',
      founder: { '@id': `${SITE_URL}/#founder` },
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
      '@id': `${SITE_URL}/#founder`,
      name: 'Eric Dobler',
      jobTitle: 'Gründer & Geschäftsführer',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      description: 'Gründer von Doblyx AI. Ehemaliger Skirennläufer, Matura an einer Skisportschule; heute spezialisiert auf KI-Automatisierung und Softwareentwicklung für Unternehmen.',
      image: `${SITE_URL}/founder.jpg`,
      sameAs: ['https://www.linkedin.com/in/eric-dobler/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Doblyx AI',
      inLanguage: 'de-AT',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}
