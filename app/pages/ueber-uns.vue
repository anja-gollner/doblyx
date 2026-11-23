<script setup lang="ts">
usePageMeta('/ueber-uns')

const facts = [
  { label: 'Firma', value: 'Doblyx AI GmbH' },
  { label: 'Adresse', value: 'Schildbach 42, 8230 Hartberg, Österreich' },
  { label: 'Firmenbuch', value: 'FN 670873d, LG f. ZRS Graz' },
  { label: 'UID', value: 'ATU82914937' },
]
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
          <p class="reveal eyebrow">Über uns</p>
          <h1 class="reveal mx-auto mt-6 max-w-4xl font-serif text-display-lg text-fg">
            Doblyx: ein Ansprechpartner von der Analyse <span class="accent">bis zum Betrieb.</span>
          </h1>
          <p class="reveal mx-auto mt-8 max-w-xl text-[15px] leading-7 text-fg/70">
            Doblyx AI GmbH ist ein junges Unternehmen aus Hartberg in der Steiermark. Wir bauen KI-Lösungen für Solar-, Wärmepumpen- und Elektrobetriebe, die im Alltag zuverlässig laufen.
          </p>
        </div>
      </section>

      <!-- B · Eric Dobler -->
      <FounderSection />

      <!-- C · Warum Energiebranche -->
      <section class="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <HorizonGlow tone="orange" />
        <div class="container-site grid gap-14 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="reveal eyebrow">Fokus</p>
            <h2 class="reveal heading mt-6">
              Warum wir uns auf die <span class="accent">Energiebranche konzentrieren.</span>
            </h2>
          </div>
          <div class="reveal lg:col-span-7 lg:pt-14">
            <p class="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug text-fg/85">
              Solar-, Wärmepumpen- und Elektrobetriebe haben oft volle Auftragsbücher und ein Büro am Limit. Die Abläufe sind ähnlich: Anfrage, Besichtigung, Angebot, Unterlagen, Montage, Service. Weil wir uns auf diese Betriebe konzentrieren, sprechen wir Ihre Sprache und müssen Ihre Abläufe nicht erst kennenlernen.
            </p>
          </div>
        </div>
      </section>

      <!-- D · So arbeiten wir -->
      <PromiseSection eyebrow="So arbeiten wir" />

      <!-- E · Firmendaten -->
      <section class="relative bg-ink pb-20 sm:pb-28 lg:pb-32">
        <div class="container-site">
          <div class="reveal glass-card p-8 sm:p-10">
            <h2 class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Firmendaten</h2>
            <dl class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="fact in facts" :key="fact.label">
                <dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{{ fact.label }}</dt>
                <dd class="mt-1.5 text-[15px] text-fg">{{ fact.value }}</dd>
              </div>
              <div>
                <dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">E-Mail</dt>
                <dd class="mt-1.5 text-[15px]"><a :href="`mailto:${site.email}`" class="text-fg underline decoration-cantaloupe/60 underline-offset-4 hover:text-cantaloupe">{{ site.email }}</a></dd>
              </div>
              <div>
                <dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Telefon</dt>
                <dd class="mt-1.5 text-[15px]"><a :href="site.phoneHref" class="whitespace-nowrap text-fg underline decoration-cantaloupe/60 underline-offset-4 hover:text-cantaloupe">{{ site.phone }}</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>

    <!-- F · Schluss-CTA -->
    <FooterSection title="Lernen wir" accent="uns kennen." />
  </div>
</template>
