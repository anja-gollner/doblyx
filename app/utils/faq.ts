// FAQ-Inhalte: eine Quelle für die sichtbaren Fragen (FaqListe) und die strukturierten Daten (FAQPage)
import { site } from './site'

export interface FaqItem {
  q: string
  a: string
  // Optionaler Link innerhalb der Antwort: dieser Text in `a` wird verlinkt
  link?: { text: string, to: string }
}

const items = {
  checkKosten: {
    q: 'Was kostet der AI Ready Check?',
    a: `Der AI Ready Check hat für uns einen Wert von ${site.readyCheckValue}. Für Betriebe aus der Energiebranche führen wir ihn aktuell ohne Kosten durch. Es entsteht keine Verpflichtung.`,
  },
  projektKosten: {
    q: 'Was kostet ein Projekt?',
    a: 'Jedes Projekt wird individuell kalkuliert, je nach Umfang und Anzahl der Abläufe. Sie erhalten vor dem Start ein verbindliches Angebot mit klarem Umfang. Ohne Ihre Zustimmung entstehen keine Kosten.',
  },
  zielgruppe: {
    q: 'Für welche Betriebe arbeitet ihr?',
    a: 'Unser Schwerpunkt sind Photovoltaik-, Wärmepumpen- und Elektrobetriebe sowie andere Unternehmen aus der Energiebranche, typischerweise mit 15 bis 70 Mitarbeitern. Abläufe wie Anfragen, Angebote und Dokumente automatisieren wir auch für andere Branchen.',
  },
  knowhow: {
    q: 'Brauchen wir technisches Know-how?',
    a: 'Nein. Wir übernehmen Konzeption, Umsetzung und Einschulung. Von Ihnen brauchen wir nur jemanden, der Ihre Abläufe kennt.',
  },
  programme: {
    q: 'Funktioniert das mit unseren bestehenden Programmen?',
    a: 'In den allermeisten Fällen ja. Wir binden die Tools an, die Sie bereits nutzen, etwa Microsoft 365, Google Workspace sowie gängige CRM-, Buchhaltungs- und Projekttools. Technisch setzen wir unter anderem auf n8n und führende KI-Modelle.',
  },
  daten: {
    q: 'Was passiert mit unseren Daten?',
    a: 'Datenschutz ist bei uns Teil der Planung, kein Nachgedanke. Wir setzen DSGVO-konform um, schließen einen Auftragsverarbeitungsvertrag ab und betreiben die Lösungen nach Möglichkeit auf Servern in der EU.',
  },
  vertrauen: {
    q: 'Ihr seid ein junges Unternehmen. Warum sollten wir euch vertrauen?',
    a: 'Eine berechtigte Frage. Deshalb starten wir mit dem AI Ready Check, legen Kosten vorab offen und arbeiten mit klarem Umfang, in dem Sie früh Ergebnisse sehen. Als Pilotpartner profitieren Sie zusätzlich von besonderen Konditionen.',
  },
  tempo: {
    q: 'Wie schnell läuft die erste Lösung?',
    a: 'Das hängt vom Umfang ab. Den konkreten Zeitplan erhalten Sie zusammen mit dem Angebot, also bevor das Projekt startet.',
  },
} satisfies Record<string, FaqItem>

// Startseite: alle acht Fragen
export const faqHome: FaqItem[] = [
  items.checkKosten, items.projektKosten, items.zielgruppe, items.knowhow,
  items.programme, items.daten, items.vertrauen, items.tempo,
]

// /ablauf: Fragen 1, 2, 4, 5, 6, 8 der Startseite
export const faqAblauf: FaqItem[] = [
  items.checkKosten, items.projektKosten, items.knowhow, items.programme, items.daten, items.tempo,
]

// /ai-ready-check: eigene, kurze Liste
export const faqReadyCheck: FaqItem[] = [
  {
    q: 'Was kostet der AI Ready Check?',
    a: `Der Check hat für uns einen Wert von ${site.readyCheckValue}. Für Betriebe aus der Energiebranche führen wir ihn aktuell ohne Kosten durch. Es entsteht keine Verpflichtung.`,
  },
  {
    q: 'Was muss ich vorbereiten?',
    a: 'Nichts. Es hilft, wenn Sie grob wissen, wo im Büro heute am meisten Zeit verloren geht.',
  },
  {
    q: 'Wer sollte dabei sein?',
    a: 'Die Person, die über Investitionen in Ihrem Betrieb entscheidet, also meist Geschäftsführung oder Inhaber. Gerne zusätzlich die Büroleitung.',
  },
  {
    q: 'Was passiert mit meinen Daten?',
    a: 'Ihre Angaben verwenden wir nur für den Check und die Auswertung. Details finden Sie in unserer Datenschutzerklärung.',
    link: { text: 'Datenschutzerklärung', to: '/datenschutz' },
  },
]
