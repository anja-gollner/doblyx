<script setup lang="ts">
const pains = [
  'Anfragen bleiben liegen, weil im Tagesgeschäft niemand Zeit hat, sofort zu antworten.',
  'Daten werden händisch von E-Mails ins CRM, in Excel und in die Buchhaltung kopiert.',
  'Ein Angebot zu erstellen dauert Tage – obwohl es jedes Mal ähnlich aussieht.',
  'Ihre besten Leute verbringen ihre Zeit mit Routine statt mit Kunden.',
  'Wichtiges Wissen steckt in Köpfen und Postfächern statt in Systemen.',
  'Sie wissen, dass KI helfen könnte – aber nicht, wo Sie anfangen sollen.',
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
            Die meisten Unternehmen haben kein Personalproblem, sondern ein Prozessproblem. Jede Stunde Routinearbeit fehlt dort, wo sie wirklich Umsatz bringt.
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
            Genau hier setzen wir an. <span class="text-muted">Mit Automatisierungen, die im Hintergrund laufen – zuverlässig, rund um die Uhr.</span>
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
