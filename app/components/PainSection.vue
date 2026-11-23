<script setup lang="ts">
const pains = [
  'Anfragen bleiben liegen, weil tagsüber alle auf der Baustelle sind.',
  'Ein Angebot mit Modulen, Speicher, Wärmepumpe oder Zählerplatz dauert Tage, obwohl es jedes Mal ähnlich aussieht.',
  'Netzanmeldung, Förderunterlagen und Dokumentation fressen Stunden im Büro.',
  'Daten werden händisch von E-Mails in Excel, CRM und Buchhaltung kopiert.',
  'Wichtiges Wissen steckt in den Köpfen von zwei, drei Schlüsselpersonen.',
  'Sie wissen, dass KI helfen könnte, aber nicht, wo Sie anfangen sollen.',
]
</script>

<template>
  <section class="relative py-20 sm:py-28 lg:py-36">
    <HorizonGlow tone="orange" />
    <div class="container-site grid gap-14 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-32">
          <p class="reveal eyebrow">Ausgangslage</p>
          <h2 class="reveal heading mt-6">
            Kommt Ihnen das <span class="accent">bekannt vor?</span>
          </h2>
          <p class="reveal mt-6 max-w-md text-[15px] leading-7 text-muted">
            Die meisten Energiebetriebe haben genug Anfragen. Was fehlt, ist Zeit im Büro, um sie schnell und sauber abzuarbeiten.
          </p>
        </div>
      </div>

      <ol class="lg:col-span-7">
        <li
          v-for="(pain, i) in pains"
          :key="i"
          class="reveal group flex items-baseline gap-6 border-t border-[var(--line)] py-7 last:border-b"
        >
          <span class="font-mono text-[11px] text-muted transition-colors duration-500 group-hover:text-cantaloupe">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug text-fg/85 transition-colors duration-500 group-hover:text-fg">
            {{ pain }}
          </p>
        </li>
        <li class="reveal pt-10">
          <p class="text-[15px] text-fg">
            Genau hier setzen wir an. <span class="text-muted">Mit Lösungen, die im Hintergrund laufen und auf Ihren bestehenden Programmen aufbauen.</span>
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
