<script setup lang="ts">
const included = [
  'Ihren AI Ready Score von 0 bis 100',
  'Eine Einordnung in Prozessreife, Datenqualität, Technik und Organisation',
  'Den Bereich in Ihrem Betrieb mit dem größten KI-Hebel',
  'Zwei bis drei passende Anwendungsfälle',
]
</script>

<template>
  <section id="check" class="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-36">
    <div class="container-site grid items-center gap-16 lg:grid-cols-2">
      <div>
        <p class="reveal eyebrow">Der erste Schritt</p>
        <h2 class="reveal heading mt-6">
          Ihr Einstieg: der <span class="accent">AI Ready Check.</span>
        </h2>
        <p class="reveal mt-6 max-w-lg text-[15px] leading-7 text-muted">
          In 45 bis 60 Minuten finden wir gemeinsam heraus, wie bereit Ihr Betrieb für KI ist und wo sie Ihnen am meisten bringt. Sie bekommen eine ehrliche Einschätzung, auch wenn die Antwort „noch nicht“ lautet.
        </p>

        <p class="reveal mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Das bekommen Sie</p>
        <ul class="mt-5 space-y-4">
          <li v-for="item in included" :key="item" class="reveal flex gap-4 text-[15px] leading-7 text-fg/85">
            <svg class="mt-1.5 h-4 w-4 flex-shrink-0 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            {{ item }}
          </li>
        </ul>

        <CtaReadyCheck class="reveal mt-10" />
        <p class="reveal mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          <NuxtLink to="/ai-ready-check" class="text-fg underline decoration-cantaloupe/60 underline-offset-4 transition-colors hover:text-cantaloupe">Mehr zum AI Ready Check</NuxtLink>
          <NuxtLink to="/ablauf" class="text-fg underline decoration-cantaloupe/60 underline-offset-4 transition-colors hover:text-cantaloupe">So läuft die Zusammenarbeit ab</NuxtLink>
        </p>
      </div>

      <ScoreMock class="reveal" />
    </div>
  </section>
</template>
