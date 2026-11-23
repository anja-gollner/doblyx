<script setup lang="ts">
// Gemeinsames Template der Branchenseiten (Spezifikation 2.5): Inhalte aus utils/branchen.ts
const route = useRoute()
const branche = brancheBySlug[String(route.params.slug)]
if (!branche) throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden', fatal: true })

usePageMeta(`/branchen/${branche.slug}`)
</script>

<template>
  <div>
    <a href="#main" class="skip-link">Zum Inhalt springen</a>
    <Navbar />

    <main id="main">
      <!-- A · Hero -->
      <section class="grain relative overflow-hidden bg-ink pb-20 pt-44 sm:pb-28 sm:pt-52">
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(55%_55%_at_50%_100%,rgba(252,115,77,0.35),rgba(2,151,222,0.18)_45%,transparent_75%)]" aria-hidden="true" />
        <div class="container-site relative flex flex-col items-center text-center">
          <p class="reveal eyebrow">{{ branche.label }}</p>
          <h1 class="reveal mx-auto mt-6 max-w-4xl font-serif text-display-lg text-fg">
            {{ branche.title }} <span class="accent">{{ branche.accent }}</span>
          </h1>
          <p class="reveal mx-auto mt-8 max-w-xl text-[15px] leading-7 text-fg/70">{{ branche.text }}</p>
          <CtaReadyCheck class="reveal mt-10" center :note="branche.ctaNote" />
        </div>
      </section>

      <!-- B · Engpässe bzw. Für wen -->
      <section class="relative py-20 sm:py-28 lg:py-32">
        <HorizonGlow tone="orange" />
        <div class="container-site grid gap-14 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="lg:sticky lg:top-32">
              <p class="reveal eyebrow">{{ branche.pains ? 'Ausgangslage' : 'Für wen' }}</p>
              <h2 class="reveal heading mt-6">
                {{ branche.painsTitle }} <span class="accent">{{ branche.painsAccent }}</span>
              </h2>
            </div>
          </div>

          <ol v-if="branche.pains" class="lg:col-span-7">
            <li
              v-for="(pain, i) in branche.pains"
              :key="pain"
              class="reveal group flex items-baseline gap-6 border-t border-[var(--line)] py-7 last:border-b"
            >
              <span class="font-mono text-[11px] text-muted transition-colors duration-500 group-hover:text-cantaloupe">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug text-fg/85 transition-colors duration-500 group-hover:text-fg">{{ pain }}</p>
            </li>
          </ol>
          <div v-else class="reveal lg:col-span-7 lg:pt-14">
            <p class="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug text-fg/85">{{ branche.forWhom }}</p>
          </div>
        </div>
      </section>

      <!-- C · Anwendungsfälle -->
      <section class="relative overflow-hidden bg-white/[0.015] py-20 sm:py-28 lg:py-32">
        <HorizonGlow tone="blue" />
        <div class="container-site">
          <div class="mx-auto max-w-3xl text-center">
            <p class="reveal eyebrow">Anwendungsfälle</p>
            <h2 class="reveal heading mt-6">
              {{ branche.casesTitle }} <span class="accent">{{ branche.casesAccent }}</span>
            </h2>
          </div>
          <div class="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnwendungsfallKarte
              v-for="item in branche.cases"
              :key="item.title"
              :area="item.area ?? branche.name"
              :title="item.title"
              :steps="item.steps"
            />
          </div>
        </div>
      </section>

      <!-- D · Firmenwissen und E · So starten wir -->
      <section class="relative bg-ink py-20 sm:py-28 lg:py-32">
        <div class="container-site grid gap-4 lg:grid-cols-2">
          <div class="reveal glass-card p-8 sm:p-10">
            <p class="eyebrow">Firmenwissen</p>
            <h2 class="mt-6 font-serif text-display-md text-fg">Firmenwissen an <span class="accent">einem Ort.</span></h2>
            <p class="mt-6 text-[15px] leading-7 text-muted">
              {{ branche.knowledgeSources }} und die Erfahrung Ihrer besten Leute liegen heute verstreut in Ordnern, Postfächern und Köpfen. Wir führen sie in einer Wissensdatenbank zusammen. Ein interner KI-Assistent beantwortet Fragen Ihres Teams mit Quellenangabe, auch wenn die Schlüsselperson gerade im Urlaub ist.
            </p>
          </div>
          <div class="reveal glass-card flex flex-col p-8 sm:p-10">
            <p class="eyebrow">Der erste Schritt</p>
            <h2 class="mt-6 font-serif text-display-md text-fg">So <span class="accent">starten wir.</span></h2>
            <p class="mt-6 text-[15px] leading-7 text-muted">{{ branche.startText }}</p>
            <NuxtLink to="/ablauf" class="btn-ghost mt-8 self-start">
              So läuft es ab <span class="arrow" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- F · FAQ -->
      <FaqListe v-if="branche.faq" :items="branche.faq" />
    </main>

    <!-- G · Schluss-CTA -->
    <FooterSection
      :title="branche.closingTitle"
      :accent="branche.closingAccent"
      :cta-label="branche.closingLabel"
      :cta-note="branche.ctaNote"
    />
  </div>
</template>
