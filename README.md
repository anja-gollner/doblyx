# doblyx.com

Website der Doblyx AI GmbH – gebaut mit Nuxt 4, Tailwind CSS, GSAP und einem WebGL-Shader (three.js) für das Polarlicht im Hero. Gehostet auf Vercel, Domain bei GoDaddy.

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

Für das Kontaktformular wird eine `.env` mit `RESEND_API_KEY=…` benötigt.

## Veröffentlichen

- Push auf `main` → Vercel baut automatisch und veröffentlicht auf www.doblyx.com.
- Jeder andere Branch bekommt eine geschützte Test-Adresse auf `…vercel.app`.
- `npm run build:staging` baut eine Testversion, die für Suchmaschinen komplett gesperrt ist.

## Häufige Änderungen

| Was | Wo |
|---|---|
| Telefon, E-Mail, Standort, LinkedIn | `app/utils/site.ts` |
| Vergebene Gründungskunden-Plätze | `app/utils/site.ts` → `foundingTaken` hochzählen |
| FAQ (Website + Google + llms.txt) | `app/utils/faq.ts`, danach `public/llms.txt` anpassen |
| Texte eines Abschnitts | `app/components/<Abschnitt>Section.vue` |
| Farben, Schriften | `tailwind.config.js`, `app/assets/css/main.css` |
| Hero-Licht (Shader) | `app/composables/useShaderHero.ts` |
| SEO-Daten, Titel, strukturierte Daten | `nuxt.config.ts` |

## Projektstruktur

```
app/
  components/   Abschnitte der Startseite (Hero, PainSection, ServicesSection …) und Bausteine (Navbar, Logo, HorizonGlow …)
  composables/  Smooth-Scroll, Scroll-Animationen, Hero-Shader, Maus-Lichtschein
  pages/        Startseite, /prozess, Impressum, Datenschutz, AGB
  plugins/      Umami Analytics (cookiefrei)
  utils/        Firmendaten, FAQ, Analytics-Helfer
server/api/     Kontaktformular → E-Mail über Resend
public/         Bilder, Logos, robots.txt, llms.txt, Social-Media-Vorschaubild
brand/          Styleguide (PDF); brand/referenz/ ist nicht im Git
```

## Umgebungsvariablen (Vercel)

| Name | Zweck |
|---|---|
| `RESEND_API_KEY` | Versand der Kontaktanfragen |
| `RESEND_FROM` | optional: eigene Absender-Adresse, sobald die Domain in Resend bestätigt ist |
| `SITE_ENV` | `staging` für Testversionen (sperrt Suchmaschinen) |

Analytics: Umami Cloud, Website-ID in `app/utils/site.ts`. Zählt nur auf doblyx.com.
