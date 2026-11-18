<script setup lang="ts">
import { SITE_URL, organizationSchema } from '~/utils/seo'

const route = useRoute()
// Startseite mit Schrägstrich, Unterseiten ohne: so schreibt es auch die Sitemap
const canonical = computed(() => `${SITE_URL}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)

// Rechtsseiten sind noindex: dort keine strukturierten Daten ausliefern
const noindexPaths = ['/impressum', '/datenschutz']
const indexable = computed(() => !noindexPaths.includes(route.path.replace(/\/$/, '')))

useHead({
  // Markiert JS-Unterstützung vor dem ersten Rendern (steuert die Reveal-Animationen)
  script: computed(() => [
    { innerHTML: "document.documentElement.classList.add('js')" },
    ...(indexable.value ? [{ key: 'org-schema', type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) }] : []),
  ]),
  // Canonical und og:url passend zur jeweiligen Seite
  link: [{ rel: 'canonical', href: canonical }],
  meta: [{ property: 'og:url', content: canonical }],
})

useLenis()
useScrollReveal()
useSpotlight()
</script>

<template>
  <NuxtPage />
</template>
