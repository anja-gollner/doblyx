<script setup lang="ts">
const route = useRoute()
const canonical = computed(() => `https://doblyx.com${route.path === '/' ? '' : route.path.replace(/\/$/, '')}`)

useHead({
  // Markiert JS-Unterstützung vor dem ersten Rendern (steuert die Reveal-Animationen)
  script: [{ innerHTML: "document.documentElement.classList.add('js')" }],
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
