<script setup lang="ts">
const steps = [
  { no: '01', title: 'Potenzial-Check', meta: 'Kostenlos · 30 Min.', text: 'Wir lernen Ihre Abläufe kennen und zeigen Ihnen, wo Automatisierung am meisten bringt.' },
  { no: '02', title: 'Konzept & Angebot', meta: 'Transparent', text: 'Klarer Umfang, klarer Zeitplan, klare Kosten. Sie entscheiden, bevor eine Zeile gebaut wird.' },
  { no: '03', title: 'Umsetzung', meta: 'In Etappen', text: 'Wir bauen in kurzen Schritten und binden Ihr Team ein. Sie sehen früh erste Ergebnisse.' },
  { no: '04', title: 'Betreuung', meta: 'Langfristig', text: 'Überwachung, Anpassungen und Einschulung. Ihr System läuft weiter, auch wenn sich Ihr Geschäft verändert.' },
]
</script>

<template>
  <section id="ablauf" class="relative bg-ink py-20 sm:py-28 lg:py-36">
    <div class="container-site">
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p class="reveal eyebrow">Ablauf</p>
          <h2 class="reveal heading mt-6 max-w-2xl">
            Vier Schritte. <span class="accent">Keine Überraschungen.</span>
          </h2>
        </div>
        <NuxtLink to="/prozess" class="reveal btn-ghost self-start lg:self-auto">
          Ablauf im Detail <span class="arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <ol class="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <li v-for="step in steps" :key="step.no" class="reveal glass-card group p-8 sm:p-9">
          <div class="flex items-center justify-between">
            <span class="font-serif text-5xl text-fg/25 transition-colors duration-500 group-hover:text-cantaloupe">{{ step.no }}</span>
            <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{{ step.meta }}</span>
          </div>
          <h3 class="mt-12 font-serif text-[1.75rem] leading-tight text-fg">{{ step.title }}</h3>
          <p class="mt-3 text-[14px] leading-6 text-muted">{{ step.text }}</p>
          <span class="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-electric to-cantaloupe transition-transform duration-700 group-hover:scale-x-100" aria-hidden="true" />
        </li>
      </ol>
    </div>
  </section>
</template>
