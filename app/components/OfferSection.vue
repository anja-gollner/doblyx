<script setup lang="ts">
const included = [
  { title: 'Kostenloses Erstgespräch · 30 Min.', text: 'Per Video-Call oder Telefon. Wir klären, wo Sie Zeit verlieren und ob sich Automatisierung für Sie lohnt. Wenn nicht, sagen wir Ihnen das.' },
  { title: `KI-Umsetzungsanalyse · ${site.analysisPrice} Fixpreis`, text: 'Wir nehmen Ihre Abläufe im Detail auf und rechnen durch, welche Automatisierung sich wirklich lohnt.' },
  { title: 'Ihr fertiger Umsetzungsplan', text: 'Mit Aufwand, Kosten und erwarteter Ersparnis. Umsetzen können Sie ihn mit uns oder mit jemand anderem.' },
]

const levers = [
  { label: 'Anfragen-Bearbeitung', level: 'Hoch', width: '88%' },
  { label: 'Angebotserstellung', level: 'Hoch', width: '74%' },
  { label: 'Rechnungsablage', level: 'Mittel', width: '52%' },
]
</script>

<template>
  <section id="check" class="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-36">
    <div class="container-site grid items-center gap-16 lg:grid-cols-2">
      <div>
        <p class="reveal eyebrow">Der erste Schritt</p>
        <h2 class="reveal heading mt-6">
          Starten Sie mit einem <span class="accent">kostenlosen Erstgespräch.</span>
        </h2>
        <p class="reveal mt-6 max-w-lg text-[15px] leading-7 text-muted">
          In 30 Minuten klären wir, wo Sie Zeit verlieren und ob sich Automatisierung für Sie lohnt. Wenn ja, folgt die KI-Umsetzungsanalyse: Sie wissen danach genau, was ein Projekt kostet und was es bringt, bevor Sie sich entscheiden.
        </p>

        <ul class="mt-10 space-y-6">
          <li v-for="(item, i) in included" :key="item.title" class="reveal flex gap-5">
            <span class="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] font-mono text-[10px] text-fg">{{ i + 1 }}</span>
            <div>
              <h3 class="text-[15px] font-medium text-fg">{{ item.title }}</h3>
              <p class="mt-1 text-[14px] leading-6 text-muted">{{ item.text }}</p>
            </div>
          </li>
        </ul>

        <div class="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#kontakt" class="btn-primary" @click.prevent="useScrollTo('kontakt')">
            Termin anfragen <span class="arrow" aria-hidden="true">→</span>
          </a>
          <p class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Der Plan gehört Ihnen, auch ohne Folgeauftrag.</p>
        </div>
      </div>

      <!-- Muster eines Umsetzungsplans -->
      <div class="reveal relative">
        <div class="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-electric/25 via-transparent to-cantaloupe/25 blur-3xl" aria-hidden="true" />
        <figure class="glass-card p-7 sm:p-9">
          <div class="flex items-center justify-between border-b border-[var(--line)] pb-5">
            <div>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Umsetzungsplan</p>
              <p class="mt-1 font-serif text-2xl text-fg">Musterfirma GmbH</p>
            </div>
            <span class="rounded-full border border-cantaloupe/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cantaloupe">Muster</span>
          </div>

          <p class="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Ihre größten Hebel</p>
          <ul class="mt-4 space-y-5">
            <li v-for="(lever, i) in levers" :key="lever.label">
              <div class="flex items-baseline justify-between text-[14px]">
                <span class="text-fg"><span class="mr-3 font-mono text-[11px] text-muted">0{{ i + 1 }}</span>{{ lever.label }}</span>
                <span class="font-mono text-[11px] text-fg/70">Potenzial: {{ lever.level }}</span>
              </div>
              <div class="mt-2.5 h-1 overflow-hidden rounded-full bg-[var(--line)]">
                <div class="h-full rounded-full bg-gradient-to-r from-electric to-cantaloupe" :style="{ width: lever.width }" />
              </div>
            </li>
          </ul>

          <div class="mt-8 rounded-2xl border border-[var(--line)] bg-ink p-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Empfehlung</p>
            <p class="mt-2 text-[14px] leading-6 text-fg/85">
              Mit Hebel 01 starten: überschaubarer Aufwand, schnell spürbare Entlastung im Vertrieb.
            </p>
          </div>
          <figcaption class="sr-only">Beispielhafte Darstellung eines Umsetzungsplans</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
