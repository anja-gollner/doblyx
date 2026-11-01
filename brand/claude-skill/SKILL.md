---
name: doblyx-design
description: Doblyx AI Brand- und Designsystem. Verwenden, wenn Website-Abschnitte, Landingpages, Präsentationen, Angebote, Social-Media-Grafiken oder andere visuelle Materialien für Doblyx gestaltet oder getextet werden. Enthält Farben, Schriften, Komponenten, Bewegung und Tonalität.
---

# Doblyx Design System

Quelle der Wahrheit: Website-Repo `doblyx` (Nuxt 4 + Tailwind), Styleguide `brand/doblyx-styleguide.pdf`. Diese Datei fasst beides zusammen.

## Grundcharakter

Dunkel, ruhig, edel. Licht ist der Akzent, nicht die Fläche. Editorial-Typografie. Ehrliche, klare Sprache. Wenig, aber hochwertige Bewegung.

## Farben

| Token | Hex | Rolle | Anteil |
|---|---|---|---|
| Midnight Black (`ink`) | `#02070A` | Grundfläche, Seitenhintergrund | ~70 % |
| Electric Blue (`electric`) | `#0297DE` | Licht, Linien, Details, Häkchen | ~20 % |
| Cantaloupe (`cantaloupe`) | `#FC734D` | Akzent: Eyebrow-Punkte, Hover, Nummern, Status | ~10 % |
| Ink 800 | `#060D12` | abgesetzte Abschnitte | |
| Ink 700 | `#0A141B` | Formularfelder | |
| Off-White (`fg`) | `#F3F5F7` | Text, Haupt-Buttons | |
| Muted | `#8C969F` | Fließtext sekundär, Labels | |
| Linie | `rgba(243,245,247,.08)` / stark `.16` | Haarlinien, Rahmen | |

Polarlicht-Verlauf (nur große Flächen wie Hero, Finale, Vorschaubilder; nie für Text oder Logo): von unten Dunkelrot `#5c0c0c` → Rot `#d93a22` → Cantaloupe → Pfirsich `#fdb59d` → Hellblau `#cfeaff` → Electric Blue → Navy `#04234a` → Midnight Black.

Keine Farbverläufe in Schrift. Kein Pink/Violett.

## Typografie

- **Instrument Serif** (400, normal + kursiv): alle Überschriften und Kennzahlen. Pro Headline genau ein Wort oder eine Wortgruppe kursiv als Akzent, in Weiß (`.accent`).
- **Inter** (400, 500): Fließtext, Buttons, Formulare. 15 px, Zeilenhöhe ~1,7.
- **JetBrains Mono** (400, 500): kleine Labels in Versalien mit Sperrung 0,22 em, Nummern (`01`), Status, technische Details.

Skala: Display-LG `clamp(2.6rem, 6vw, 5.25rem)`, Display-MD `clamp(2rem, 4vw, 3.25rem)`, Zeilenhöhe 1–1,05, Laufweite leicht negativ.

## Komponenten

- **Eyebrow**: orangefarbener 6-px-Punkt + Mono-Label (`.eyebrow`) über jeder Abschnitts-Headline.
- **Buttons**: Pillenform. Primär Off-White auf Schwarz, beim Hover Cantaloupe mit weichem orangem Schein. Sekundär: transparenter Rahmen `line-strong`. Pfeil `→` gleitet beim Hover 3 px.
- **Glas-Karte** (`.glass-card`): Radius 24 px, Fläche `rgba(255,255,255,.05→.012)`, 1-px-Verlaufsrand (oben hell), tiefer weicher Schatten, Maus-Lichtschein (Blau→Orange) beim Hover.
- **Orb-Button**: milchiges Glas mit weißem Rand und äußerem Ring. Nur einmal pro Seite (Hero).
- **Lichthorizont**: 1-px-Leuchtlinie mit weichem Glow als Übergang zwischen Abschnitten (`HorizonGlow`, Töne blue/orange/mix).
- **Status-Punkt**: pulsierender Cantaloupe-Punkt für Live-Infos („3 frei“).
- **Hero-Karten**: Glasrahmen mit edlen Innenflächen (Elfenbein `#f7f2ec`, Rosé-Glas, Mitternachtsblau `#0d1a42`), echte Fotos für Kontrast.
- Layout: max. Breite 82 rem, Seitenabstand 20/32/48 px, Abschnitte vertikal 80–144 px.

## Bewegung

Weich und langsam, `cubic-bezier(.16,1,.3,1)` bzw. GSAP `expo.out`, 0,9–1,3 s. Überschriften blenden von leicht unscharf zu scharf ein. Nie hektisch, keine Dauer-Animationen außer dezenten Live-Elementen. `prefers-reduced-motion` immer respektieren.

## Bildsprache

Echte Fotos (Eric, Team, Kundenprojekte) und echte Workflow-Screenshots (Kundendaten unkenntlich). Keine Stockfotos mit KI-Gehirnen, Robotern oder Hologrammen.

## Logo

Immer einfarbig: Weiß auf dunkel, Midnight Black auf hell. Schutzzone = Höhe des D-Symbols. Mindesthöhe 24 px digital / 8 mm Druck. Kein Verlauf, Schatten oder Glow im Logo.

## Tonalität

1. Sie-Form gegenüber Kunden.
2. Nutzen vor Technik („mehr Zeit für Kunden“, nicht „n8n-Webhook“). Tech-Begriffe höchstens in FAQ.
3. Kurze Sätze, konkrete Alltagsbeispiele.
4. Keine erfundenen Zahlen, Fallstudien oder Superlative.
5. Ruhig, ohne Verkaufsdruck.
6. **Keine Gedankenstriche** (– —) im Text. Stattdessen Punkt, Komma oder Doppelpunkt.

Feste Begriffe: Erstgespräch (kostenlos, 30 Min.) · KI-Umsetzungsanalyse (Fixpreis 1.490 €) · Umsetzungsplan · Umsetzungsprojekte ab 10.000 € · Gründungskunden-Programm · „KI“ statt „AI“ · „Automatisierung“ statt „Bot“.

## Checkliste für neue Materialien

1. Hintergrund Midnight Black, Licht nur als Akzent.
2. Headline Instrument Serif, ein Wort kursiv.
3. Labels JetBrains Mono mit orangem Punkt.
4. Logo weiß, mit Schutzzone.
5. Ein klarer nächster Schritt: Erstgespräch.
