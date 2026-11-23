<script setup lang="ts">
usePageMeta('/ablauf')

const phases = [
  {
    no: '01',
    title: 'AI Ready Check',
    lead: 'Verstehen, bevor wir bauen.',
    meta: `45–60 Minuten · Wert ${site.readyCheckValue} · aktuell ohne Kosten`,
    text: 'Im Video-Call lernen wir Ihren Betrieb kennen: Ziele, Abläufe, Daten. Sie bekommen Ihren AI Ready Score und sehen, in welchem Bereich KI den größten Hebel hat.',
    points: [
      'Score von 0 bis 100 über vier Dimensionen',
      'Der Bereich mit dem größten Hebel',
      'Ehrliche Antwort, ob sich KI für Sie jetzt lohnt',
    ],
    outcome: 'Klarheit, wo Sie stehen und wo KI Ihnen am meisten bringt.',
    link: { to: '/ai-ready-check', label: 'Mehr zum AI Ready Check' },
  },
  {
    no: '02',
    title: 'Ihr Vorschlag',
    lead: 'Der nächste Schritt, der zu Ihrem Betrieb passt.',
    meta: 'Nach dem Check',
    text: 'Aus dem Check wissen wir, wo Ihr größter Hebel liegt. Daraus machen wir Ihnen einen konkreten Vorschlag für den nächsten Schritt, zugeschnitten auf Ihren Betrieb und die Größe Ihres Vorhabens.',
    points: [
      'Ein Vorschlag statt Paketauswahl',
      'Umfang, Zeitplan und Preis vorab klar',
      'Sie entscheiden, ob es weitergeht',
    ],
    outcome: 'Ein klarer nächster Schritt mit festem Umfang.',
  },
  {
    no: '03',
    title: 'Umsetzung',
    lead: 'Festes Projekt statt Blackbox.',
    meta: 'Individuell kalkuliert',
    text: 'Sie erhalten ein verbindliches Angebot mit klarem Umfang. Wir bauen in Etappen und zeigen Ihnen regelmäßig, was schon funktioniert. Ihre bestehenden Programme bleiben, wir verbinden sie nur intelligenter.',
    points: [
      'Verbindlicher Umfang und Preis vor Projektstart',
      'Tests mit echten Daten, bevor etwas live geht',
      'Einschulung Ihres Teams und vollständige Dokumentation',
    ],
    outcome: 'Eine laufende, getestete Lösung, die Ihnen gehört. Kein Lock-in.',
  },
  {
    no: '04',
    title: 'Betreuung & Ausbau',
    lead: 'Der nächste Hebel, wenn Sie bereit sind.',
    meta: 'Sie entscheiden',
    text: 'Nach dem ersten Projekt zeigen wir Ihnen, welcher Ablauf als Nächstes den größten Hebel hat. Sie entscheiden Projekt für Projekt.',
    points: [
      'Empfehlung für den nächsten sinnvollen Schritt',
      'Jedes Folgeprojekt mit eigenem, klarem Angebot',
      'Wartung und Betreuung auf Wunsch',
    ],
    outcome: 'Ein System, das mit Ihrem Betrieb wächst, in Ihrem Tempo.',
  },
]
</script>

<template>
  <div>
    <Navbar />

    <main>
      <section class="grain relative overflow-hidden bg-ink pb-20 pt-44 sm:pb-28 sm:pt-52">
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(55%_55%_at_50%_100%,rgba(252,115,77,0.35),rgba(2,151,222,0.18)_45%,transparent_75%)]" aria-hidden="true" />
        <div class="container-site relative text-center">
          <p class="reveal eyebrow">Ablauf</p>
          <h1 class="reveal mx-auto mt-6 max-w-4xl font-serif text-display-lg text-fg">
            Vom ersten Gespräch zur <span class="accent">laufenden Lösung.</span>
          </h1>
          <p class="reveal mx-auto mt-8 max-w-xl text-[15px] leading-7 text-fg/70">
            Kein starres Framework, keine Paketauswahl. Ein klarer Einstieg, ein konkreter Vorschlag und eine Umsetzung, bei der Sie jederzeit wissen, wo Sie stehen.
          </p>
          <ol class="reveal mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            <li v-for="phase in phases" :key="phase.no">
              <a :href="`#phase-${phase.no}`" class="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-ink/50 px-4 py-2 backdrop-blur transition-colors hover:border-fg" @click.prevent="useScrollTo(`phase-${phase.no}`)">
                <span class="font-mono text-[10px] text-cantaloupe">{{ phase.no }}</span>
                <span class="text-[13px] text-fg">{{ phase.title }}</span>
              </a>
            </li>
          </ol>
        </div>
      </section>

      <section class="bg-ink pb-28 sm:pb-36">
        <div class="container-site">
          <article
            v-for="phase in phases"
            :id="`phase-${phase.no}`"
            :key="phase.no"
            class="grid scroll-mt-28 gap-10 border-t border-[var(--line)] py-16 sm:py-20 lg:grid-cols-12"
          >
            <div class="reveal lg:col-span-5">
              <span class="font-serif text-[clamp(4rem,9vw,7.5rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(243,245,247,0.25)]" aria-hidden="true">{{ phase.no }}</span>
              <h2 class="mt-4 font-serif text-display-md text-fg">{{ phase.title }}</h2>
              <p class="mt-3 font-serif text-2xl italic text-fg/60">{{ phase.lead }}</p>
              <p class="mt-6 inline-flex rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{{ phase.meta }}</p>
            </div>

            <div class="lg:col-span-7">
              <p class="reveal text-[16px] leading-8 text-fg/80">{{ phase.text }}</p>
              <ul class="mt-8 space-y-4">
                <li v-for="point in phase.points" :key="point" class="reveal flex gap-4 text-[15px] leading-7 text-fg/75">
                  <svg class="mt-1.5 h-4 w-4 flex-shrink-0 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {{ point }}
                </li>
              </ul>
              <div class="reveal mt-10 rounded-2xl border border-[var(--line)] bg-ink-800 p-6">
                <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-cantaloupe">Ergebnis</p>
                <p class="mt-2 text-[15px] leading-7 text-fg">{{ phase.outcome }}</p>
              </div>
              <NuxtLink v-if="phase.link" :to="phase.link.to" class="reveal btn-ghost mt-8">
                {{ phase.link.label }} <span class="arrow" aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <FaqListe :items="faqAblauf" />
    </main>

    <FooterSection title="Bereit für den" accent="ersten Schritt?" />
  </div>
</template>
