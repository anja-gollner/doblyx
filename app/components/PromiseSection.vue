<script setup lang="ts">
const promises = [
  { title: 'Ehrlich statt Hype', text: 'Wir sagen Ihnen auch, wenn sich eine Automatisierung (noch) nicht lohnt.' },
  { title: 'Kosten vorab klar', text: 'Sie kennen Umfang und Preis, bevor wir mit der Umsetzung starten.' },
  { title: 'Ihre Daten, Ihr System', text: 'DSGVO-konform umgesetzt, dokumentiert und ohne Lock-in. Sie behalten die Kontrolle.' },
  { title: 'Ein Ansprechpartner', text: 'Von der ersten Analyse bis zum laufenden Betrieb, ohne Stille Post.' },
]
</script>

<template>
  <section class="relative bg-ink py-20 sm:py-28 lg:py-32">
    <div class="container-site">
      <div class="mx-auto max-w-2xl text-center">
        <p class="reveal eyebrow">Unser Versprechen</p>
        <h2 class="reveal heading mt-6">
          Vertrauen entsteht durch <span class="accent">Klarheit.</span>
        </h2>
      </div>

      <ul class="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(promise, i) in promises" :key="promise.title" class="reveal border-t border-[var(--line-strong)] pt-6">
          <span class="font-mono text-[11px] text-cantaloupe">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="mt-4 font-serif text-[1.6rem] leading-tight text-fg">{{ promise.title }}</h3>
          <p class="mt-3 text-[14px] leading-6 text-muted">{{ promise.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
