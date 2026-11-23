<script setup lang="ts">
const cases = [
  {
    area: 'Photovoltaik',
    title: 'Anfragen vorqualifizieren',
    to: '/branchen/photovoltaik',
    steps: ['Anfrage über Website oder Portal', 'KI fragt Dachfläche, Verbrauch und Speicherwunsch ab', 'Vollständige Anfrage im CRM', 'Termin für Vor-Ort-Besichtigung'],
  },
  {
    area: 'Photovoltaik',
    title: 'Angebote nachfassen',
    to: '/branchen/photovoltaik',
    steps: ['PV-Angebot verschickt', 'Automatische Erinnerung', 'Rückfragen beantwortet', 'Termin für den Abschluss'],
  },
  {
    area: 'Wärmepumpen',
    title: 'Angebot vorbereiten',
    to: '/branchen/waermepumpen',
    steps: ['Anfrage mit Gebäudedaten', 'KI erstellt Angebotsentwurf', 'Freigabe per Klick', 'Versand und Nachfassen'],
  },
  {
    area: 'Wärmepumpen',
    title: 'Wartung planen',
    to: '/branchen/waermepumpen',
    steps: ['Wartungsvertrag im System', 'Fälligkeit erkannt', 'Kunde bekommt Terminvorschlag', 'Termin im Kalender des Technikers'],
  },
  {
    area: 'Elektrotechnik',
    title: 'Regieberichte & Protokolle',
    to: '/branchen/elektrotechnik',
    steps: ['Monteur diktiert oder fotografiert', 'KI erstellt Bericht', 'Prüfung im Büro', 'Ablage und Rechnung'],
  },
  {
    area: 'Alle Energiebetriebe',
    title: 'Eingangsrechnungen',
    to: '/branchen/weitere',
    steps: ['Rechnung per E-Mail', 'KI liest Betrag und Lieferant', 'Prüfung und Ablage', 'Übergabe an Buchhaltung'],
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
          Was in Energiebetrieben <span class="accent">möglich ist.</span>
        </h2>
        <p class="reveal mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted">
          Typische Abläufe, die wir automatisieren. Ihr Ablauf sieht anders aus? Dann planen wir ihn individuell.
        </p>
      </div>

      <div class="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnwendungsfallKarte v-for="item in cases" :key="item.title" v-bind="item" />
      </div>

      <p class="reveal mt-12 text-center text-[14px] text-muted">
        Andere Branche?
        <NuxtLink to="/branchen/weitere" class="text-fg underline decoration-cantaloupe/60 underline-offset-4 transition-colors hover:text-cantaloupe">So arbeiten wir auch für Sie →</NuxtLink>
      </p>
    </div>
  </section>
</template>
