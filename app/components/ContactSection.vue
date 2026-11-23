<script setup lang="ts">
const finaleRef = ref<HTMLElement | null>(null)
useShaderHero(finaleRef, { hill: false })

const nextSteps = [
  'Sie senden uns Ihre Anfrage.',
  'Eric ruft Sie innerhalb eines Werktags an.',
  'Gemeinsam vereinbaren Sie den Termin für den AI Ready Check (45–60 Min. per Video-Call).',
  'Danach wissen Sie, wo Ihr Betrieb steht und welcher nächste Schritt sinnvoll ist.',
]
</script>

<template>
  <section id="kontakt" class="relative overflow-hidden pb-[13rem] pt-20 sm:pb-[16rem] sm:pt-28 lg:pt-36">
    <HorizonGlow tone="mix" />
    <!-- Licht-Finale: die blauen Lichtstreifen aus dem Hero, ohne orange Welle -->
    <div ref="finaleRef" class="finale" aria-hidden="true" />

    <div class="container-site relative grid gap-16 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <p class="reveal eyebrow">Kontakt</p>
        <h2 class="reveal heading mt-6">
          Lassen Sie uns <span class="accent">sprechen.</span>
        </h2>
        <p class="reveal mt-6 max-w-md text-[15px] leading-7 text-muted">
          Fordern Sie Ihren AI Ready Check an. Ohne Verkaufsdruck, nur ein ehrlicher Blick auf Ihren Betrieb.
        </p>

        <div class="reveal mt-10 flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-ink-800 p-4">
          <div class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-[var(--line-strong)]">
            <img src="/eric-avatar.jpg" alt="Eric Dobler" class="h-full w-full object-cover" width="56" height="56" loading="lazy" decoding="async" />
          </div>
          <div>
            <p class="text-[14px] text-fg">Sie sprechen direkt mit Eric Dobler</p>
            <p class="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Gründer · kein Callcenter</p>
          </div>
        </div>

        <dl class="reveal mt-8 space-y-4 text-[15px]">
          <div class="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Telefon</dt>
            <dd><a :href="site.phoneHref" class="text-fg transition-colors hover:text-cantaloupe">{{ site.phone }}</a></dd>
          </div>
          <div class="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">E-Mail</dt>
            <dd><a :href="`mailto:${site.email}`" class="text-fg transition-colors hover:text-cantaloupe">{{ site.email }}</a></dd>
          </div>
          <div class="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Standort</dt>
            <dd class="text-fg">{{ site.location }}</dd>
          </div>
        </dl>

        <div class="reveal mt-10">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">So geht es weiter</p>
          <ol class="mt-4 space-y-3">
            <li v-for="(step, i) in nextSteps" :key="step" class="flex gap-4 text-[14px] leading-6 text-fg/75">
              <span class="font-mono text-[11px] leading-6 text-cantaloupe">{{ i + 1 }}</span>
              {{ step }}
            </li>
          </ol>
        </div>
      </div>

      <div class="reveal lg:col-span-7">
        <AnfrageFormular />
      </div>
    </div>
  </section>
</template>

<style scoped>
.finale {
  pointer-events: none;
  position: absolute;
  inset: auto 0 -320px; /* untere Hälfte liegt außerhalb, sichtbar ist nur die obere */
  height: 640px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 30%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 30%);
}
</style>
