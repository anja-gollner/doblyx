<script setup lang="ts">
// Seite ist aktuell nur auf Deutsch verfügbar
const isEn = ref(false)

useHead({
  title: computed(() => isEn.value ? 'Legal Notice — Doblyx AI' : 'Impressum — Doblyx AI'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="starfield relative overflow-hidden px-6 pb-24 pt-40">
      <HorizonGlow tone="mix" />
      <div class="relative z-[1] mx-auto max-w-3xl">
        <h1 class="mb-12 font-serif text-display-md font-normal" style="color: #F3F5F7">
          {{ isEn ? 'Legal Notice' : 'Impressum' }}
        </h1>

        <div class="space-y-8 text-[15px] leading-relaxed" style="color: rgba(243, 245, 247, 0.72)">
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Information pursuant to § 5 ECG (Austrian E-Commerce Act)' : 'Angaben gemäß § 5 ECG' }}
            </h2>
            <p>
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg, {{ isEn ? 'Austria' : 'Österreich' }}
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Represented by' : 'Vertreten durch' }}
            </h2>
            <p>Eric Dobler</p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Contact' : 'Kontakt' }}
            </h2>
            <p>
              {{ isEn ? 'Email' : 'E-Mail' }}: office@doblyx.com<br />
              {{ isEn ? 'Phone' : 'Telefon' }}: +43 676 5800866
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Commercial Register' : 'Registereintrag' }}
            </h2>
            <p v-if="isEn">
              Registered in the Austrian Commercial Register<br />
              Court: Regional Court for Civil and Commercial Matters Graz<br />
              Registration Number: FN 670873d
            </p>
            <p v-else>
              Eintragung im Firmenbuch<br />
              Firmenbuchgericht: Landesgericht für ZRS Graz<br />
              Firmenbuchnummer: FN 670873d
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Tax Information' : 'Steuerdaten' }}
            </h2>
            <p>
              {{ isEn ? 'VAT ID' : 'UID-Nummer' }}: ATU82914937<br />
              {{ isEn ? 'Tax Number' : 'Steuernummer' }}: 67 445/7528
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Responsible for Content pursuant to § 25 Austrian Media Act' : 'Verantwortlich für den Inhalt nach § 25 MedienG' }}
            </h2>
            <p>
              Eric Dobler<br />
              Schildbach 42, 8230 Hartberg
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'EU Online Dispute Resolution' : 'EU-Streitschlichtung' }}
            </h2>
            <p>
              {{ isEn ? 'The European Commission provides a platform for online dispute resolution (ODR):' : 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:' }}
            </p>
            <p class="mt-2">
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="underline transition-colors duration-300" style="color: #FC734D">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p class="mt-2">
              {{ isEn ? 'Our email address can be found above in this legal notice.' : 'Unsere E-Mail-Adresse finden Sie oben im Impressum.' }}
            </p>
          </div>

          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? 'Consumer Dispute Resolution' : 'Verbraucherstreitbeilegung / Universalschlichtungsstelle' }}
            </h2>
            <p>
              {{ isEn ? 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.' : 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
