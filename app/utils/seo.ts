// Zentrale SEO-Daten: Hauptdomain, Beschreibung und strukturierte Daten (JSON-LD)
// Wird von nuxt.config.ts und app.vue genutzt, deshalb ohne Nuxt-Auto-Imports.

// Hauptdomain: doblyx.com leitet in Vercel dauerhaft (308) hierher weiter
export const SITE_URL = 'https://www.doblyx.com'

// Title und Description je Seite (auch für og:/twitter:), Name für die Breadcrumbs
export const pageMeta: Record<string, { name: string, title: string, description: string }> = {
  '/': {
    name: 'Start',
    title: 'KI für Solar-, Wärmepumpen- und Elektrobetriebe | Doblyx AI',
    description: 'Doblyx automatisiert Anfragen, Angebote und Büroarbeit für Energiebetriebe in Österreich und Deutschland. Start mit dem AI Ready Check.',
  },
  '/ai-ready-check': {
    name: 'AI Ready Check',
    title: 'AI Ready Check für Energiebetriebe | Doblyx AI',
    description: 'Wie bereit ist Ihr Betrieb für KI? Score über 4 Dimensionen, größter Hebel und passende Anwendungsfälle in 45 bis 60 Minuten.',
  },
  '/ablauf': {
    name: 'Ablauf',
    title: 'So arbeiten wir: vom AI Ready Check zur Lösung | Doblyx AI',
    description: 'Erst der AI Ready Check, dann ein konkreter Vorschlag für Ihren Betrieb. Umfang und Preis kennen Sie vor dem Start.',
  },
}

export const description = pageMeta['/']!.description

// Einleitung aus llms.txt, auch Beschreibung im Organisations-Schema
const orgDescription = 'Doblyx AI GmbH aus Hartberg (Steiermark, Österreich) baut KI-Lösungen für Solar-, Wärmepumpen- und Elektrobetriebe sowie andere Unternehmen der Energiebranche in Österreich und Deutschland. Wir automatisieren Anfragen, Angebote, Dokumente und Firmenwissen. Einstieg ist der AI Ready Check (Wert 749 €, für Energiebetriebe aktuell ohne Kosten).'

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
      description: orgDescription,
      slogan: 'KI für Solar-, Wärmepumpen- und Elektrobetriebe.',
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
      areaServed: ['AT', 'DE'],
      availableLanguage: ['de'],
      knowsAbout: ['Künstliche Intelligenz', 'Prozessautomatisierung', 'Photovoltaik', 'Wärmepumpen', 'Elektrotechnik'],
      sameAs: ['https://www.linkedin.com/in/eric-dobler/'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Leistungen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anfragen & Vertrieb', description: 'Anfragen erfassen, vorqualifizieren, beantworten, Angebote nachfassen, Termine buchen.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büro & Dokumente', description: 'Angebotsentwürfe, Rechnungen, Unterlagen für Netzanmeldung und Förderung vorbereiten.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Firmenwissen & KI-Assistent', description: 'Zentrale Wissensdatenbank und interner Assistent mit Quellenangabe.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Ready Check', description: '45–60 Minuten per Video-Call: AI Ready Score (0–100) über Prozessreife, Datenqualität, Technik und Organisation, größter Hebel und passende Anwendungsfälle.' } },
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
