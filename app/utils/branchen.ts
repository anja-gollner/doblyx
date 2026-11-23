// Inhalte der Branchenseiten (/branchen/<slug>), Copy laut Umbau-Spezifikation 2.5 bis 2.9
import type { FaqItem } from './faq'

export interface Anwendungsfall {
  area?: string
  title: string
  steps: string[]
}

export interface Branche {
  slug: string
  // Name in Navigation, Footer und Breadcrumb
  name: string
  label: string
  // H1 aus zwei Teilen, der zweite kursiv
  title: string
  accent: string
  text: string
  // Abschnitt B: Engpässe als Liste oder (bei „weitere“) „Für wen“ als Text
  painsTitle: string
  painsAccent: string
  pains?: string[]
  forWhom?: string
  casesTitle: string
  casesAccent: string
  cases: Anwendungsfall[]
  knowledgeSources: string
  startText: string
  faq?: FaqItem[]
  // Abweichender CTA (nur „weitere“)
  ctaNote?: string
  closingTitle: string
  closingAccent: string
  closingLabel?: string
}

const sizeFaq: FaqItem = {
  q: 'Ab welcher Betriebsgröße lohnt sich das?',
  a: 'Typischerweise ab etwa 15 Mitarbeitern. Im AI Ready Check sagen wir Ihnen ehrlich, ob es sich für Sie schon lohnt.',
}

function softwareFaq(name: string): FaqItem {
  return {
    q: `Funktioniert das mit unserer ${name}?`,
    a: 'In vielen Fällen ja. Wir binden die Programme an, die Sie bereits nutzen. Ob und wie, klären wir im AI Ready Check.',
  }
}

const energyStart = 'Im AI Ready Check finden wir heraus, wo KI in Ihrem Betrieb den größten Hebel hat. Danach bekommen Sie von uns einen konkreten Vorschlag für den nächsten Schritt.'
const energySources = 'Datenblätter, Preislisten, Montageanleitungen'
const energyClosing = { closingTitle: 'Wie bereit ist Ihr Betrieb', closingAccent: 'für KI?' }

export const branchen: Branche[] = [
  {
    slug: 'photovoltaik',
    name: 'Photovoltaik',
    label: 'Photovoltaik',
    title: 'KI für PV-Betriebe:',
    accent: 'weniger Büro, mehr Montage.',
    text: 'Anfragen, Angebote, Netzanmeldung, Förderung: Bei PV-Betrieben wächst die Büroarbeit mit jeder Anlage. Wir automatisieren die Schritte, die sich ständig wiederholen.',
    painsTitle: 'Typische Engpässe in',
    painsAccent: 'PV-Betrieben.',
    pains: [
      'Anfragen kommen unvollständig an: Dachfläche, Verbrauch und Speicherwunsch fehlen.',
      'Jedes Angebot wird von Hand zusammengestellt, obwohl die Komponenten sich wiederholen.',
      'Verschickte Angebote werden nicht konsequent nachgefasst.',
      'Unterlagen für Netzanmeldung und Förderung kosten viel Zeit im Büro.',
      'Die Montageplanung hängt an einer Person.',
    ],
    casesTitle: 'Was wir für PV-Betriebe',
    casesAccent: 'automatisieren.',
    cases: [
      { title: 'Anfragen vorqualifizieren', steps: ['Anfrage über Website oder Portal', 'KI fragt Dachfläche, Verbrauch und Speicherwunsch ab', 'Vollständige Anfrage im CRM', 'Termin für Besichtigung'] },
      { title: 'Angebotsentwurf', steps: ['Daten aus Anfrage und Besichtigung', 'KI erstellt Entwurf mit Ihren Komponenten und Preisen', 'Freigabe per Klick', 'Versand an den Kunden'] },
      { title: 'Angebote nachfassen', steps: ['Angebot verschickt', 'Automatische Erinnerung', 'Rückfragen beantwortet', 'Termin für den Abschluss'] },
      { title: 'Unterlagen für Netzanmeldung und Förderung', steps: ['Auftrag bestätigt', 'KI sammelt Anlagen- und Kundendaten', 'Formulare vorausgefüllt', 'Prüfung und Einreichung durch Ihr Büro'] },
      { title: 'Montageplanung', steps: ['Auftrag unterschrieben', 'Material und Team abgeglichen', 'Terminvorschlag an den Kunden', 'Montage im Kalender'] },
    ],
    knowledgeSources: energySources,
    startText: energyStart,
    faq: [
      softwareFaq('Planungs- oder Angebotssoftware'),
      { q: 'Reicht KI die Förderanträge selbst ein?', a: 'Nein. Die KI bereitet Unterlagen vor und füllt Formulare aus. Geprüft und eingereicht wird immer von Ihrem Team.' },
      sizeFaq,
    ],
    ...energyClosing,
  },
  {
    slug: 'waermepumpen',
    name: 'Wärmepumpen',
    label: 'Wärmepumpen & Heizung',
    title: 'KI für Wärmepumpen- und',
    accent: 'Heizungsbetriebe.',
    text: 'Viele Anfragen, aufwendige Angebote, Förderunterlagen und Wartungstermine: Wir nehmen Ihrem Büro die Routine ab, damit Ihre Techniker beim Kunden sind und nicht am Schreibtisch.',
    painsTitle: 'Typische Engpässe in',
    painsAccent: 'Wärmepumpen-Betrieben.',
    pains: [
      'Für ein Angebot fehlen anfangs wichtige Gebäudedaten.',
      'Angebote und Förderunterlagen kosten pro Auftrag viele Stunden.',
      'Wartungstermine werden händisch geplant und gehen im Tagesgeschäft unter.',
      'Das Postfach ist voll mit Kundenfragen, die sich oft wiederholen.',
    ],
    casesTitle: 'Was wir für Wärmepumpen-Betriebe',
    casesAccent: 'automatisieren.',
    cases: [
      { title: 'Anfragen mit Gebäudedaten', steps: ['Anfrage geht ein', 'KI fragt Baujahr, Wohnfläche, Heizsystem ab', 'Vollständige Anfrage im CRM', 'Termin für Vor-Ort-Termin'] },
      { title: 'Angebot und Förderunterlagen', steps: ['Daten aus der Besichtigung', 'KI erstellt Angebotsentwurf', 'Förderformulare vorausgefüllt', 'Prüfung und Versand durch Ihr Büro'] },
      { title: 'Wartung planen', steps: ['Wartungsvertrag im System', 'Fälligkeit erkannt', 'Kunde bekommt Terminvorschlag', 'Termin im Kalender des Technikers'] },
      { title: 'Kundenanfragen per E-Mail', steps: ['E-Mail geht ein', 'KI ordnet zu und beantwortet Standardfragen', 'Sonderfälle an Ihr Team', 'Alles dokumentiert'] },
    ],
    knowledgeSources: energySources,
    startText: energyStart,
    faq: [
      softwareFaq('Branchensoftware'),
      { q: 'Entscheidet die KI über die Auslegung der Anlage?', a: 'Nein. Die KI bereitet Daten und Entwürfe vor. Die fachliche Entscheidung bleibt bei Ihren Technikern.' },
      sizeFaq,
    ],
    ...energyClosing,
  },
  {
    slug: 'elektrotechnik',
    name: 'Elektrotechnik',
    label: 'Elektrotechnik',
    title: 'KI für',
    accent: 'Elektrobetriebe.',
    text: 'Auftragseingang, Regieberichte, Prüfprotokolle, Angebote: Wir automatisieren die Büroarbeit, die zwischen Baustelle und Rechnung liegt.',
    painsTitle: 'Typische Engpässe in',
    painsAccent: 'Elektrobetrieben.',
    pains: [
      'Aufträge kommen über Telefon, E-Mail und Zuruf und müssen händisch erfasst werden.',
      'Regieberichte und Prüfprotokolle werden spät oder unvollständig abgegeben.',
      'Vom Aufmaß zum Angebot vergehen Tage.',
      'Eingangsrechnungen werden händisch geprüft und abgelegt.',
      'Normen, Datenblätter und Erfahrungswissen sind schwer zu finden.',
    ],
    casesTitle: 'Was wir für Elektrobetriebe',
    casesAccent: 'automatisieren.',
    cases: [
      { title: 'Auftragseingang', steps: ['Anfrage per E-Mail oder Formular', 'KI erfasst Kunde, Ort und Leistung', 'Auftrag im System', 'Vorschlag für die Disposition'] },
      { title: 'Regieberichte und Prüfprotokolle', steps: ['Monteur diktiert oder fotografiert', 'KI erstellt Bericht oder Protokoll', 'Prüfung im Büro', 'Ablage und Rechnung'] },
      { title: 'Vom Aufmaß zum Angebot', steps: ['Aufmaß und Fotos', 'KI erstellt Angebotsentwurf', 'Freigabe per Klick', 'Versand und Nachfassen'] },
      { title: 'Eingangsrechnungen', steps: ['Rechnung per E-Mail', 'KI liest Betrag und Lieferant', 'Prüfung und Ablage', 'Übergabe an Buchhaltung'] },
      { title: 'Wissens-Assistent', steps: ['Frage aus dem Team', 'KI sucht in Datenblättern, Normen und Firmenwissen', 'Antwort mit Quelle', 'Weniger Rückfragen beim Chef'] },
    ],
    knowledgeSources: energySources,
    startText: energyStart,
    faq: [
      softwareFaq('Handwerkersoftware'),
      { q: 'Müssen unsere Monteure etwas Neues lernen?', a: 'So wenig wie möglich. Wir bauen auf Wegen auf, die Ihr Team schon nutzt, etwa Smartphone-Fotos oder Sprachnachrichten, und schulen alle ein.' },
      sizeFaq,
    ],
    ...energyClosing,
  },
  {
    slug: 'weitere',
    name: 'Andere Branchen',
    label: 'Andere Branchen',
    title: 'Nicht aus der Energiebranche?',
    accent: 'Sprechen wir trotzdem.',
    text: 'Unser Schwerpunkt sind Solar-, Wärmepumpen- und Elektrobetriebe. Die Engpässe dahinter gibt es aber in vielen Betrieben: Anfragen bleiben liegen, Angebote dauern zu lange, Dokumente werden abgetippt, Wissen steckt in Köpfen. Das lösen wir auch für Sie.',
    painsTitle: 'Für wen wir außerhalb der',
    painsAccent: 'Energiebranche arbeiten.',
    forWhom: 'Für Handwerks-, Bau-, Dienstleistungs- und Handelsbetriebe mit wiederkehrenden Abläufen im Büro, typischerweise mit 15 bis 70 Mitarbeitern.',
    casesTitle: 'Abläufe, die wir branchenunabhängig',
    casesAccent: 'automatisieren.',
    cases: [
      { area: 'Dienstleistung', title: 'Kunden-Onboarding', steps: ['Auftrag bestätigt', 'Ordner und Zugänge angelegt', 'Willkommens-Mail', 'Aufgaben im Projekttool'] },
      { area: 'Handel & Service', title: 'Kundenservice', steps: ['E-Mail geht ein', 'KI ordnet zu und antwortet', 'Sonderfälle ans Team', 'Alles dokumentiert'] },
      { area: 'Alle Branchen', title: 'Eingangsrechnungen', steps: ['Rechnung per E-Mail', 'KI liest Betrag und Lieferant', 'Prüfung und Ablage', 'Übergabe an Buchhaltung'] },
      { area: 'Handwerk & Bau', title: 'Angebotserstellung', steps: ['Anfrage mit Fotos und Maßen', 'KI erstellt Angebotsentwurf', 'Freigabe per Klick', 'Versand und Nachfassen'] },
    ],
    knowledgeSources: 'Dokumente, Preislisten, Vorlagen',
    startText: 'Auch hier beginnen wir mit dem AI Ready Check. Danach wissen Sie, wo KI in Ihrem Betrieb den größten Hebel hat und welcher nächste Schritt sinnvoll ist.',
    // Kein „ohne Kosten“: das Angebot gilt nur für Energiebetriebe
    ctaNote: 'Eric meldet sich innerhalb eines Werktags und klärt mit Ihnen, ob und wie wir helfen können.',
    closingTitle: 'Lassen Sie uns über',
    closingAccent: 'Ihren Betrieb sprechen.',
    closingLabel: 'Anfrage senden',
  },
]

export const brancheBySlug = Object.fromEntries(branchen.map(b => [b.slug, b])) as Record<string, Branche>
