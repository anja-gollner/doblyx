<script setup lang="ts">
useHead({
  title: 'Ablauf | Doblyx AI',
  meta: [
    { name: 'description', content: `So arbeiten wir: kostenloses Erstgespräch, KI-Umsetzungsanalyse zum Fixpreis von ${site.analysisPrice}, Umsetzung als festes Projekt und Ausbau Schritt für Schritt.` },
  ],
})

const phases = [
  {
    no: '01',
    title: 'Erstgespräch',
    lead: 'Verstehen, bevor wir bauen.',
    duration: '30 Minuten · kostenlos',
    text: 'In einem kurzen Gespräch lernen wir Ihr Unternehmen und Ihre Abläufe kennen. Wo geht Zeit verloren? Wo wird doppelt gearbeitet? Wo bleiben Anfragen liegen?',
    points: [
      'Gespräch per Video-Call oder Telefon',
      'Erste Einschätzung, wo die größten Hebel liegen',
      'Ehrliche Antwort, ob sich Automatisierung für Sie lohnt',
    ],
    outcome: 'Klarheit, ob eine Umsetzungsanalyse für Sie sinnvoll ist. Unverbindlich und ohne Kosten.',
  },
  {
    no: '02',
    title: 'KI-Umsetzungsanalyse',
    lead: 'Klarheit, bevor ein Projekt startet.',
    duration: `Fixpreis · ${site.analysisPrice}`,
    text: 'Wir nehmen Ihre Abläufe im Detail auf: welche Programme Sie nutzen, wie die Daten fließen und wo Zeit verloren geht. Daraus rechnen wir durch, welche Automatisierung sich wirklich lohnt. Verständlich erklärt, ohne Fachchinesisch.',
    points: [
      'Detaillierte Aufnahme Ihrer Abläufe',
      'Priorisierte Automatisierungs-Hebel',
      'Aufwand, Kosten und erwartete Ersparnis je Hebel',
    ],
    outcome: 'Ein fertiger Umsetzungsplan. Sie können ihn mit uns umsetzen oder mit jemand anderem.',
  },
  {
    no: '03',
    title: 'Umsetzung',
    lead: 'Festes Projekt statt Blackbox.',
    duration: `Projekte ab ${site.projectFrom}`,
    text: 'Auf Basis des Plans erhalten Sie ein verbindliches Angebot mit klarem Umfang. Wir bauen in Etappen und zeigen Ihnen regelmäßig, was schon funktioniert. Ihre bestehenden Programme bleiben, wir verbinden sie nur intelligenter.',
    points: [
      'Verbindlicher Umfang und Preis vor Projektstart',
      'Tests mit echten Daten, bevor etwas live geht',
      'Einschulung Ihres Teams und vollständige Dokumentation',
    ],
    outcome: 'Eine laufende, getestete Automatisierung, die Ihnen gehört. Kein Lock-in.',
  },
  {
    no: '04',
    title: 'Ausbau',
    lead: 'Der nächste Hebel, wenn Sie bereit sind.',
    duration: 'Sie entscheiden',
    text: 'Nach dem ersten Projekt zeigen wir Ihnen, welcher Ablauf als nächstes den größten Hebel hat. Sie entscheiden Projekt für Projekt, ohne laufende Verpflichtung.',
    points: [
      'Empfehlung für den nächsten sinnvollen Schritt',
      'Jedes Folgeprojekt mit eigenem, klarem Angebot',
      'Wartung nur auf Wunsch, optional',
    ],
    outcome: 'Ein System, das mit Ihrem Unternehmen wächst, in Ihrem Tempo.',
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
            Ein Prozess, der <span class="accent">Vertrauen schafft.</span>
          </h1>
          <p class="reveal mx-auto mt-8 max-w-xl text-[15px] leading-7 text-fg/70">
            Kein starres Framework, keine endlosen Workshops. Vier klare Schritte, bei denen Sie jederzeit wissen, wo Sie stehen und was es kostet.
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
              <span class="font-serif text-[clamp(4rem,9vw,7.5rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(243,245,247,0.25)]">{{ phase.no }}</span>
              <h2 class="mt-4 font-serif text-display-md text-fg">{{ phase.title }}</h2>
              <p class="mt-3 font-serif text-2xl italic text-fg/60">{{ phase.lead }}</p>
              <p class="mt-6 inline-flex rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{{ phase.duration }}</p>
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
            </div>
          </article>
        </div>
      </section>

      <FaqSection />
    </main>

    <FooterSection />
  </div>
</template>
