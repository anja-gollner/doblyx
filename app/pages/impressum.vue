<script setup lang="ts">
useHead({
  title: 'Impressum — Doblyx AI',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="pt-40 pb-24 px-6" style="background: #FAFAFA">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 tracking-tight" style="color: #0F1419">Impressum</h1>

        <div class="space-y-8 text-[15px] leading-relaxed" style="color: #555">
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Angaben gemäß § 5 ECG</h2>
            <p>
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Vertreten durch</h2>
            <p>Eric Dobler</p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Kontakt</h2>
            <p>
              E-Mail: office@doblyx.com<br />
              Telefon: 0676/5800866
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Registereintrag</h2>
            <p>
              Eintragung im Firmenbuch<br />
              Firmenbuchgericht: Landesgericht für ZRS Graz<br />
              Firmenbuchnummer: FN 670873d
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Steuerdaten</h2>
            <p>
              UID-Nummer: ATU82914937<br />
              Steuernummer: 67 445/7528
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Verantwortlich für den Inhalt nach § 25 MedienG</h2>
            <p>
              Eric Dobler<br />
              Schildbach 42, 8230 Hartberg
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <p class="mt-2">
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="underline transition-colors duration-300" style="color: #0A1F44">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p class="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
