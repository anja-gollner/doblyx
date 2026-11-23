<script setup lang="ts">
// Anfrageformular für den AI Ready Check (Startseite #kontakt und /ai-ready-check#anfrage)
const branchen = ['Photovoltaik', 'Wärmepumpen / Heizung', 'Elektrotechnik', 'Andere Energiebranche', 'Andere Branche']
const groessen = ['1–14', '15–30', '31–70', 'über 70']
const rollen = ['Geschäftsführung / Inhaber', 'Bereichs- oder Büroleitung', 'Andere']

const form = reactive({
  name: '',
  company: '',
  branche: '',
  mitarbeiter: '',
  rolle: '',
  phone: '',
  email: '',
  message: '',
  website: '', // Honeypot gegen Spam-Bots, bleibt für Menschen unsichtbar
})
const submitted = ref(false)
const sending = ref(false)
const error = ref(false)

async function handleSubmit() {
  // Honeypot befüllt: nichts senden
  if (form.website) {
    submitted.value = true
    return
  }
  sending.value = true
  error.value = false
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    submitted.value = true
    trackEvent('anfrage-gesendet', { branche: form.branche, mitarbeiter: form.mitarbeiter })
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <form
      v-if="!submitted"
      class="glass-card bg-ink/60 p-6 sm:p-10"
      @submit.prevent="handleSubmit"
    >
      <h3 class="font-serif text-[2rem] leading-tight text-fg">AI Ready Check anfragen</h3>
      <p class="mt-3 max-w-xl text-[14px] leading-6 text-muted">
        Sie füllen das Formular aus, Eric ruft Sie innerhalb eines Werktags an und vereinbart mit Ihnen den Termin für den Check.
      </p>

      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <label class="block">
          <span class="label">Name *</span>
          <input v-model="form.name" type="text" required maxlength="120" autocomplete="name" enterkeyhint="next" placeholder="Vor- und Nachname" class="field" />
        </label>
        <label class="block">
          <span class="label">Betrieb *</span>
          <input v-model="form.company" type="text" required maxlength="160" autocomplete="organization" enterkeyhint="next" placeholder="Name Ihres Unternehmens" class="field" />
        </label>
        <label class="block">
          <span class="label">Branche *</span>
          <select v-model="form.branche" required class="field select" :class="{ 'is-empty': !form.branche }">
            <option value="" disabled>Bitte wählen</option>
            <option v-for="b in branchen" :key="b" :value="b">{{ b }}</option>
          </select>
        </label>
        <label class="block">
          <span class="label">Mitarbeiterzahl *</span>
          <select v-model="form.mitarbeiter" required class="field select" :class="{ 'is-empty': !form.mitarbeiter }">
            <option value="" disabled>Bitte wählen</option>
            <option v-for="g in groessen" :key="g" :value="g">{{ g }}</option>
          </select>
        </label>
        <label class="block sm:col-span-2">
          <span class="label">Ihre Rolle *</span>
          <select v-model="form.rolle" required class="field select" :class="{ 'is-empty': !form.rolle }">
            <option value="" disabled>Bitte wählen</option>
            <option v-for="r in rollen" :key="r" :value="r">{{ r }}</option>
          </select>
        </label>
        <label class="block">
          <span class="label">Telefon *</span>
          <input v-model="form.phone" type="tel" required maxlength="40" autocomplete="tel" enterkeyhint="next" placeholder="Für den Rückruf" class="field" />
        </label>
        <label class="block">
          <span class="label">E-Mail *</span>
          <input v-model="form.email" type="email" required maxlength="200" autocomplete="email" enterkeyhint="next" class="field" />
        </label>
      </div>

      <label class="mt-5 block">
        <span class="label">Was kostet Sie im Büro aktuell am meisten Zeit? <span class="normal-case tracking-normal">(optional)</span></span>
        <textarea
          v-model="form.message"
          rows="4"
          maxlength="4000"
          enterkeyhint="send"
          placeholder="z.B. Angebote schreiben, Anfragen beantworten, Förderanträge …"
          class="field resize-none"
        />
      </label>

      <label class="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
      </label>

      <p v-if="error" class="mt-5 text-[14px] text-cantaloupe" role="alert">
        Das hat leider nicht geklappt. Bitte rufen Sie uns direkt an:
        <a :href="site.phoneHref" class="whitespace-nowrap underline">{{ site.phone }}</a>.
      </p>

      <button type="submit" :disabled="sending" class="btn-primary mt-7 w-full disabled:opacity-60">
        <template v-if="!sending">Anfrage senden <span class="arrow" aria-hidden="true">→</span></template>
        <template v-else>Wird gesendet …</template>
      </button>

      <p class="mt-5 text-center text-[12px] leading-5 text-muted">
        Mit dem Absenden verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage, gemäß unserer
        <NuxtLink to="/datenschutz" class="underline underline-offset-2 hover:text-fg">Datenschutzerklärung</NuxtLink>.
      </p>
    </form>

    <div v-else class="glass-card flex min-h-[420px] flex-col items-center justify-center bg-ink/60 p-10 text-center" role="status">
      <span class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cantaloupe text-ink">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
      </span>
      <p class="mt-6 max-w-sm text-[16px] leading-7 text-fg">
        Danke für Ihre Anfrage. Eric ruft Sie innerhalb eines Werktags an und vereinbart den Termin für Ihren AI Ready Check.
      </p>
    </div>
  </div>
</template>

<style scoped>
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--muted);
}

/* Auswahlfelder im Stil der Textfelder, mit eigenem Pfeil */
.select {
  appearance: none;
  padding-right: 2.75rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238C969F' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

.select.is-empty {
  color: rgba(140, 150, 159, 0.6);
}

.select option {
  background: #0A141B;
  color: #F3F5F7;
}
</style>
