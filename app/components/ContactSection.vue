<script setup lang="ts">
const finaleRef = ref<HTMLElement | null>(null)
useShaderHero(finaleRef, { hill: false })

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  founding: false,
  website: '', // Honeypot gegen Spam-Bots, bleibt für Menschen unsichtbar
})
const submitted = ref(false)
const sending = ref(false)
const error = ref(false)

async function handleSubmit() {
  sending.value = true
  error.value = false
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    submitted.value = true
    trackEvent('anfrage-gesendet', { gruendungskunde: form.founding })
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}

const nextSteps = [
  'Sie senden uns Ihre Anfrage.',
  'Wir melden uns innerhalb von 24 Stunden (werktags) mit Terminvorschlägen.',
  '30 Minuten Gespräch per Video-Call oder Telefon.',
  'Ihre Kurzanalyse kommt per E-Mail.',
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
          Sichern Sie sich Ihren kostenlosen Potenzial-Check. Kein Verkaufsgespräch, keine Verpflichtung, nur ein ehrlicher Blick auf Ihre Abläufe.
        </p>

        <div class="reveal mt-10 flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-ink-800 p-4">
          <div class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-[var(--line-strong)]">
            <img src="/eric.jpg" alt="Eric Dobler" class="h-full w-full origin-[50%_30%] scale-[1.7] object-cover" width="56" height="56" loading="lazy" />
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
        <form
          v-if="!submitted"
          class="glass-card bg-ink/60 p-6 sm:p-10"
          @submit.prevent="handleSubmit"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="block">
              <span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Name *</span>
              <input v-model="form.name" type="text" required autocomplete="name" placeholder="Max Mustermann" class="field" />
            </label>
            <label class="block">
              <span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Unternehmen</span>
              <input v-model="form.company" type="text" autocomplete="organization" placeholder="Firmenname" class="field" />
            </label>
            <label class="block">
              <span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">E-Mail *</span>
              <input v-model="form.email" type="email" required autocomplete="email" placeholder="name@firma.at" class="field" />
            </label>
            <label class="block">
              <span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Telefon <span class="normal-case tracking-normal">(optional)</span></span>
              <input v-model="form.phone" type="tel" autocomplete="tel" placeholder="+43 …" class="field" />
            </label>
          </div>

          <label class="mt-5 block">
            <span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Was kostet Sie aktuell am meisten Zeit? *</span>
            <textarea
              v-model="form.message"
              rows="4"
              required
              placeholder="z. B. „Wir beantworten jede Anfrage händisch und tippen alles doppelt ins CRM.“"
              class="field resize-none"
            />
          </label>

          <label class="absolute -left-[9999px]" aria-hidden="true">
            Website
            <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
          </label>

          <label class="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--line)] bg-ink-700/60 p-4 transition-colors hover:border-[var(--line-strong)]">
            <input v-model="form.founding" type="checkbox" class="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#FC734D]" />
            <span class="text-[14px] leading-6 text-fg/80">
              Ich interessiere mich für das <span class="text-fg">Gründungskunden-Programm</span>.
            </span>
          </label>

          <p v-if="error" class="mt-5 text-[14px] text-cantaloupe" role="alert">
            Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie direkt an
            <a :href="`mailto:${site.email}`" class="underline">{{ site.email }}</a>.
          </p>

          <button type="submit" :disabled="sending" class="btn-primary mt-7 w-full disabled:opacity-60">
            <template v-if="!sending">Kostenlosen Potenzial-Check anfragen <span class="arrow" aria-hidden="true">→</span></template>
            <template v-else>Wird gesendet …</template>
          </button>

          <p class="mt-5 text-center text-[12px] leading-5 text-muted">
            Ihre Angaben nutzen wir ausschließlich zur Bearbeitung Ihrer Anfrage.
            <NuxtLink to="/datenschutz" class="underline underline-offset-2 hover:text-fg">Datenschutzerklärung</NuxtLink>
          </p>
        </form>

        <div v-else class="glass-card flex min-h-[420px] flex-col items-center justify-center bg-ink/60 p-10 text-center" role="status">
          <span class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cantaloupe text-ink">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </span>
          <h3 class="mt-6 font-serif text-4xl text-fg">Danke, {{ form.name.split(' ')[0] }}.</h3>
          <p class="mt-3 max-w-sm text-[15px] leading-7 text-muted">
            Ihre Anfrage ist angekommen. Wir melden uns innerhalb von 24 Stunden (werktags) mit Terminvorschlägen bei Ihnen.
          </p>
        </div>
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
