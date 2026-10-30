<script setup lang="ts">
const services = [
  {
    no: '01',
    title: 'Vertrieb & Anfragen',
    text: 'Jede Anfrage wird sofort erfasst, vorqualifiziert und beantwortet, auch am Wochenende. Kontakte landen automatisch im CRM, Termine direkt im Kalender.',
    tags: ['Lead-Erfassung', 'Sofort-Antworten', 'CRM-Pflege', 'Terminbuchung'],
  },
  {
    no: '02',
    title: 'Backoffice & Dokumente',
    text: 'Rechnungen, Verträge, Formulare: KI liest die Daten aus und überträgt sie dorthin, wo sie gebraucht werden. Schluss mit Copy & Paste.',
    tags: ['Dokumenten-KI', 'Datenübertragung', 'Freigaben', 'Reports'],
  },
  {
    no: '03',
    title: 'KI-Assistenten & Schnittstellen',
    text: 'Interne Assistenten, die Ihr Firmenwissen kennen, und Schnittstellen, die Ihre bestehenden Programme endlich miteinander sprechen lassen.',
    tags: ['Wissens-Assistent', 'E-Mail-KI', 'Integrationen', 'Workflows'],
  },
]
</script>

<template>
  <section id="leistungen" class="relative bg-ink py-20 sm:py-28 lg:py-36">
    <div class="container-site">
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p class="reveal eyebrow">Leistungen</p>
          <h2 class="reveal heading mt-6 max-w-2xl">
            Was wir <span class="accent">für Sie bauen.</span>
          </h2>
        </div>
        <p class="reveal max-w-sm text-[15px] leading-7 text-muted">
          Keine Software von der Stange. Wir bauen auf Ihren bestehenden Programmen auf und automatisieren genau die Schritte, die Sie heute ausbremsen.
        </p>
      </div>

      <div class="mt-16 grid gap-4 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.no"
          class="reveal glass-card group flex flex-col p-8 sm:p-10"
        >
          <div class="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-electric/0 blur-3xl transition-all duration-700 group-hover:bg-electric/20" aria-hidden="true" />
          <span class="font-mono text-[11px] text-muted">{{ service.no }}</span>
          <h3 class="mt-14 font-serif text-[2rem] leading-tight text-fg">{{ service.title }}</h3>
          <p class="mt-4 flex-1 text-[15px] leading-7 text-muted">{{ service.text }}</p>
          <ul class="mt-8 flex flex-wrap gap-2">
            <li
              v-for="tag in service.tags"
              :key="tag"
              class="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg/70"
            >
              {{ tag }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
