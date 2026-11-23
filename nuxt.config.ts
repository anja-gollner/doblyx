// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { SITE_URL, SITE_UPDATED, description, pageMeta } from './app/utils/seo'

// Test-Version (z. B. mydoblyx.com): `npm run build:staging` – für Suchmaschinen komplett gesperrt
const isStaging = process.env.SITE_ENV === 'staging'

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
    // Alte Ablauf-Seite: dauerhaft auf die neue
    '/prozess': { redirect: { to: '/ablauf', statusCode: 301 } },
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
    url: SITE_URL,
    name: 'Doblyx AI',
  },

  sitemap: {
    // Rechtsseiten sind noindex und gehören nicht in die Sitemap
    exclude: ['/impressum', '/datenschutz'],
    // Datum der letzten inhaltlichen Änderung (in utils/seo.ts pflegen)
    defaults: { lastmod: SITE_UPDATED },
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },

  nitro: {
    prerender: {
      routes: ['/', '/ai-ready-check', '/ablauf', '/branchen/photovoltaik', '/branchen/waermepumpen', '/branchen/elektrotechnik', '/branchen/weitere', '/ueber-uns', '/impressum', '/datenschutz'],
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
      title: pageMeta['/']!.title,
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#02070A' },
        { name: 'robots', content: isStaging ? 'noindex, nofollow' : 'index, follow' },
        { name: 'author', content: 'Doblyx AI GmbH' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: pageMeta['/']!.title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Doblyx AI' },
        { property: 'og:locale', content: 'de_AT' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageMeta['/']!.title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/logo-icon-dark.svg' },
      ],
      // Strukturierte Daten (JSON-LD) setzt app.vue, damit sie auf noindex-Seiten fehlen
    },
  },
})
