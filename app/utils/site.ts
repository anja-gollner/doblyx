// Zentrale Firmendaten – hier pflegen, nicht in den Komponenten.
export const site = {
  email: 'office@doblyx.com',
  phone: '+43 676 5800866',
  phoneHref: 'tel:+436765800866',
  linkedin: 'https://www.linkedin.com/in/eric-dobler/',
  location: 'Hartberg, Steiermark',
  // Einziger Preis auf der Website: Wert des AI Ready Checks
  readyCheckValue: '749 €',
  // Umami Analytics (cloud.umami.is): Website-ID hier eintragen, leer = Analytics aus
  umamiWebsiteId: '282301e0-29f2-4412-be7f-fcac876412a9',
  // Impressum: Angaben aus GISA-Auszug und Firmenbuch eintragen (leer = Zeile wird nicht angezeigt)
  legal: {
    gewerbe: '', // Gewerbewortlaut laut GISA, z. B. „Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik“
    fachgruppe: '', // WKO-Fachgruppe, z. B. „Unternehmensberatung, Buchhaltung und Informationstechnologie (UBIT)“
    gesellschafter: '', // Gesellschafter laut Firmenbuch, z. B. „Eric Dobler (100 %)“
  },
}
