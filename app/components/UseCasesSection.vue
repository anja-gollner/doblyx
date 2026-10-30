<script setup lang="ts">
const cases = [
  {
    area: 'Immobilien',
    title: 'Interessenten-Anfragen',
    steps: ['Anfrage über Portal', 'KI beantwortet & sendet Exposé', 'Besichtigung gebucht', 'Kontakt im CRM'],
  },
  {
    area: 'Solar & Energie',
    title: 'Angebote nachfassen',
    steps: ['PV-Angebot verschickt', 'Automatische Erinnerung', 'Rückfragen beantwortet', 'Termin für Abschluss'],
  },
  {
    area: 'Handwerk & Bau',
    title: 'Angebotserstellung',
    steps: ['Anfrage mit Fotos & Maßen', 'KI erstellt Angebotsentwurf', 'Freigabe per Klick', 'Versand & Nachfassen'],
  },
  {
    area: 'Dienstleistung',
    title: 'Kunden-Onboarding',
    steps: ['Auftrag bestätigt', 'Ordner & Zugänge angelegt', 'Willkommens-Mail', 'Aufgaben im Projekttool'],
  },
  {
    area: 'Handel & E-Commerce',
    title: 'Kundenservice',
    steps: ['E-Mail geht ein', 'KI ordnet zu & antwortet', 'Sonderfälle ans Team', 'Alles dokumentiert'],
  },
  {
    area: 'Alle Branchen',
    title: 'Eingangsrechnungen',
    steps: ['Rechnung per E-Mail', 'KI liest Betrag & Lieferant', 'Prüfung & Ablage', 'Übergabe an Buchhaltung'],
  },
]
</script>

<template>
  <section id="anwendungen" class="relative overflow-hidden bg-white/[0.015] py-20 sm:py-28 lg:py-36">
    <HorizonGlow tone="blue" />
    <div class="container-site">
      <div class="mx-auto max-w-3xl text-center">
        <p class="reveal eyebrow">Anwendungsfälle</p>
        <h2 class="reveal heading mt-6">
          Was <span class="accent">möglich ist.</span>
        </h2>
        <p class="reveal mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted">
          Typische Abläufe, die wir automatisieren. Ihr Prozess sieht anders aus? Umso besser: Jede Lösung wird individuell auf Ihr Unternehmen geplant.
        </p>
      </div>

      <div class="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in cases"
          :key="item.title"
          class="reveal glass-card group p-7 sm:p-8"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{{ item.area }}</span>
            <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-electric opacity-0 transition-opacity duration-500 group-hover:opacity-100">Automatisiert</span>
          </div>
          <h3 class="mt-5 font-serif text-[1.75rem] leading-tight text-fg">{{ item.title }}</h3>

          <div class="relative mt-7 pl-6">
            <span class="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-electric via-electric/50 to-cantaloupe" aria-hidden="true" />
            <ol class="space-y-4">
              <li v-for="(step, i) in item.steps" :key="step" class="relative text-[14px] leading-snug text-fg/80">
                <span
                  class="absolute -left-6 top-[5px] h-[11px] w-[11px] rounded-full border-2 border-ink"
                  :class="i === item.steps.length - 1 ? 'bg-cantaloupe' : 'bg-electric'"
                  aria-hidden="true"
                />
                {{ step }}
              </li>
            </ol>
          </div>
        </article>
      </div>

      <p class="reveal mt-12 text-center text-[14px] text-muted">
        Nicht dabei, was Sie suchen?
        <a href="#kontakt" class="text-fg underline decoration-cantaloupe/60 underline-offset-4 transition-colors hover:text-cantaloupe" @click.prevent="useScrollTo('kontakt')">Erzählen Sie uns von Ihrem Ablauf.</a>
      </p>
    </div>
  </section>
</template>
