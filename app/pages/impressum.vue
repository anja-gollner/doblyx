<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

useHead({
  title: computed(() => isEn.value ? 'Legal Notice — Doblyx AI' : 'Impressum — Doblyx AI'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="pt-40 pb-24 px-6" style="background: #FAFAFA">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 tracking-tight" style="color: #0F1419">
          {{ isEn ? 'Legal Notice' : 'Impressum' }}
        </h1>

        <div class="space-y-8 text-[15px] leading-relaxed" style="color: #555">
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'Information pursuant to § 5 ECG (Austrian E-Commerce Act)' : 'Angaben gemäß § 5 ECG' }}
            </h2>
            <p>
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg, {{ isEn ? 'Austria' : 'Österreich' }}
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'Represented by' : 'Vertreten durch' }}
            </h2>
            <p>Eric Dobler</p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'Contact' : 'Kontakt' }}
            </h2>
            <p>
              {{ isEn ? 'Email' : 'E-Mail' }}: office@doblyx.com<br />
              {{ isEn ? 'Phone' : 'Telefon' }}: +43 676 5800866
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
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
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'Tax Information' : 'Steuerdaten' }}
            </h2>
            <p>
              {{ isEn ? 'VAT ID' : 'UID-Nummer' }}: ATU82914937<br />
              {{ isEn ? 'Tax Number' : 'Steuernummer' }}: 67 445/7528
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'Responsible for Content pursuant to § 25 Austrian Media Act' : 'Verantwortlich für den Inhalt nach § 25 MedienG' }}
            </h2>
            <p>
              Eric Dobler<br />
              Schildbach 42, 8230 Hartberg
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? 'EU Online Dispute Resolution' : 'EU-Streitschlichtung' }}
            </h2>
            <p>
              {{ isEn ? 'The European Commission provides a platform for online dispute resolution (ODR):' : 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:' }}
            </p>
            <p class="mt-2">
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="underline transition-colors duration-300" style="color: #0A1F44">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p class="mt-2">
              {{ isEn ? 'Our email address can be found above in this legal notice.' : 'Unsere E-Mail-Adresse finden Sie oben im Impressum.' }}
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
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
