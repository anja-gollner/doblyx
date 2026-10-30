<script setup lang="ts">
useHead({
  title: 'Impressum | Doblyx AI',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const h2 = 'mb-3 font-serif text-[1.6rem] font-normal leading-tight text-fg'
</script>

<template>
  <div>
    <Navbar />

    <section class="starfield relative overflow-hidden px-6 pb-24 pt-40">
      <HorizonGlow tone="mix" />
      <div class="relative z-[1] mx-auto max-w-3xl">
        <h1 class="mb-12 font-serif text-display-md font-normal text-fg">Impressum</h1>

        <div class="space-y-8 text-[15px] leading-relaxed text-fg/70">
          <div>
            <h2 :class="h2">Angaben gemäß § 5 ECG und § 14 UGB</h2>
            <p>
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg, Österreich
            </p>
          </div>

          <div>
            <h2 :class="h2">Geschäftsführer</h2>
            <p>Eric Dobler</p>
          </div>

          <div>
            <h2 :class="h2">Kontakt</h2>
            <p>
              Telefon: <a :href="site.phoneHref" class="text-fg">{{ site.phone }}</a><br />
              E-Mail: <a :href="`mailto:${site.email}`" class="text-fg">{{ site.email }}</a>
            </p>
          </div>

          <div>
            <h2 :class="h2">Firmenbuch und UID</h2>
            <p>
              Rechtsform: Gesellschaft mit beschränkter Haftung<br />
              Firmenbuchnummer: FN 670873d<br />
              Firmenbuchgericht: Landesgericht für ZRS Graz<br />
              UID-Nummer: ATU82914937
            </p>
          </div>

          <div>
            <h2 :class="h2">Unternehmensgegenstand</h2>
            <p>Entwicklung und Umsetzung von KI-gestützten Automatisierungslösungen für Unternehmen.</p>
          </div>

          <div>
            <h2 :class="h2">Gewerbe und Kammer</h2>
            <p>
              <template v-if="site.legal.gewerbe">Gewerbe: {{ site.legal.gewerbe }}<br /></template>
              Gewerbebehörde: Bezirkshauptmannschaft Hartberg-Fürstenfeld<br />
              Mitglied der Wirtschaftskammer Steiermark<template v-if="site.legal.fachgruppe">, Fachgruppe {{ site.legal.fachgruppe }}</template><br />
              Anwendbare Vorschriften: Gewerbeordnung, abrufbar unter
              <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" class="text-fg underline decoration-cantaloupe/60 underline-offset-4">www.ris.bka.gv.at</a>
            </p>
          </div>

          <div>
            <h2 :class="h2">Offenlegung gemäß § 25 MedienG</h2>
            <p>
              Medieninhaber: Doblyx AI GmbH, Schildbach 42, 8230 Hartberg<br />
              Unternehmensgegenstand: Entwicklung und Umsetzung von KI-gestützten Automatisierungslösungen für Unternehmen<br />
              Geschäftsführer: Eric Dobler<br />
              <template v-if="site.legal.gesellschafter">Gesellschafter: {{ site.legal.gesellschafter }}<br /></template>
              Grundlegende Richtung (Blattlinie): Information über die Leistungen der Doblyx AI GmbH.
            </p>
          </div>

          <div>
            <h2 :class="h2">Verbraucherstreitbeilegung</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
