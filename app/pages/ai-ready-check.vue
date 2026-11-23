<script setup lang="ts">
usePageMeta('/ai-ready-check')

const badges = [`Wert ${site.readyCheckValue}`, 'Aktuell ohne Kosten', 'Direkt mit Eric Dobler']

const benefits = [
  { title: 'Ihr AI Ready Score', text: 'Eine Zahl von 0 bis 100, die zeigt, wie gut Ihr Betrieb heute für KI aufgestellt ist.' },
  { title: 'Vier Dimensionen', text: 'Prozessreife, Datenqualität, Technik und Organisation. So sehen Sie, wo es hakt und wo Sie schon gut sind.' },
  { title: 'Ihr größter Hebel', text: 'Der Bereich in Ihrem Betrieb, in dem KI am meisten Zeit und Aufwand spart.' },
  { title: 'Konkrete Anwendungsfälle', text: 'Zwei bis drei Ideen, die zu Ihren Abläufen passen, nicht zu einem Prospekt.' },
]

const steps = [
  { title: 'Anfrage senden', text: 'Über das Formular unten oder telefonisch.' },
  { title: 'Rückruf von Eric', text: 'Innerhalb eines Werktags. Wir klären kurz Ihre Situation und vereinbaren einen Termin.' },
  { title: 'AI Ready Check per Video-Call', text: '45 bis 60 Minuten. Wir sprechen über Ihre Ziele und gehen elf kurze Fragen zu Abläufen und Daten durch.' },
  { title: 'Auswertung im Gespräch', text: 'Sie sehen Ihren Score und Ihre Stärken und Schwächen direkt im Call. Ehrlich, auch wenn KI für Sie gerade noch nicht sinnvoll ist. Danach empfehlen wir Ihnen den passenden nächsten Schritt.' },
]

const fit = [
  'Geschäftsführer oder Inhaber eines Solar-, Wärmepumpen- oder Elektrobetriebs',
  'Betriebe mit etwa 15 bis 70 Mitarbeitern',
  'Sie wollen KI in den nächsten Monaten wirklich angehen, nicht nur darüber lesen',
]
const noFit = [
  'Sie suchen technischen Support für ein bestehendes Programm',
  'KI steht bei Ihnen frühestens in ein paar Jahren auf dem Plan',
  'Sie können über Investitionen nicht mitentscheiden und die Geschäftsführung ist nicht eingebunden',
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
          <p class="reveal eyebrow">AI Ready Check für Energiebetriebe</p>
          <h1 class="reveal mx-auto mt-6 max-w-4xl font-serif text-display-lg text-fg">
            Wie bereit ist Ihr Betrieb <span class="accent">für KI?</span>
          </h1>
          <p class="reveal mx-auto mt-8 max-w-xl text-[15px] leading-7 text-fg/70">
            Im AI Ready Check finden wir in 45 bis 60 Minuten heraus, wo Ihr Betrieb steht, wo KI Ihnen am meisten bringt und was der sinnvolle nächste Schritt ist.
          </p>
          <CtaReadyCheck class="reveal mt-10" center />
          <ul class="reveal mt-8 flex flex-wrap justify-center gap-2">
            <li v-for="badge in badges" :key="badge" class="rounded-full border border-[var(--line-strong)] bg-ink/50 px-4 py-2 font-mono text-[11px] text-fg/85 backdrop-blur">{{ badge }}</li>
          </ul>
        </div>
      </section>

      <!-- B · Das bekommen Sie -->
      <section class="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-32">
        <div class="container-site grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p class="reveal eyebrow">Das bekommen Sie</p>
            <h2 class="reveal heading mt-6">
              Das nehmen Sie aus dem <span class="accent">Check mit.</span>
            </h2>
            <ul class="mt-12 grid gap-3 sm:grid-cols-2">
              <li v-for="benefit in benefits" :key="benefit.title" class="reveal glass-card rounded-2xl p-6 sm:p-7">
                <svg class="h-4 w-4 text-cantaloupe" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <h3 class="mt-4 text-[15px] font-medium text-fg">{{ benefit.title }}</h3>
                <p class="mt-1.5 text-[13.5px] leading-6 text-muted">{{ benefit.text }}</p>
              </li>
            </ul>
          </div>
          <ScoreMock class="reveal" />
        </div>
      </section>

      <!-- C · So läuft es ab -->
      <section class="relative bg-ink py-20 sm:py-28 lg:py-32">
        <div class="container-site">
          <p class="reveal eyebrow">Ablauf</p>
          <h2 class="reveal heading mt-6 max-w-2xl">
            So läuft der <span class="accent">AI Ready Check ab.</span>
          </h2>
          <ol class="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <li v-for="(step, i) in steps" :key="step.title" class="reveal glass-card group p-8 sm:p-9">
              <span class="font-serif text-5xl text-fg/25 transition-colors duration-500 group-hover:text-cantaloupe">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="mt-10 font-serif text-[1.6rem] leading-tight text-fg">{{ step.title }}</h3>
              <p class="mt-3 text-[14px] leading-6 text-muted">{{ step.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- D · Für wen -->
      <section class="relative overflow-hidden bg-white/[0.015] py-20 sm:py-28 lg:py-32">
        <HorizonGlow tone="blue" />
        <div class="container-site">
          <p class="reveal eyebrow">Für wen</p>
          <h2 class="reveal heading mt-6 max-w-2xl">
            Für wen der Check <span class="accent">gedacht ist.</span>
          </h2>
          <div class="mt-14 grid gap-4 lg:grid-cols-2">
            <div class="reveal glass-card p-8 sm:p-10">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">Passt gut</p>
              <ul class="mt-6 space-y-4">
                <li v-for="item in fit" :key="item" class="flex gap-4 text-[15px] leading-7 text-fg/85">
                  <svg class="mt-1.5 h-4 w-4 flex-shrink-0 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="reveal glass-card p-8 sm:p-10">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Passt eher nicht</p>
              <ul class="mt-6 space-y-4">
                <li v-for="item in noFit" :key="item" class="flex gap-4 text-[15px] leading-7 text-fg/65">
                  <svg class="mt-1.5 h-4 w-4 flex-shrink-0 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <!-- Etappe 2: Link auf /branchen/weitere -->
          <p class="reveal mt-10 text-[14px] text-muted">
            Nicht aus der Energiebranche? Sprechen Sie uns trotzdem an.
          </p>
        </div>
      </section>

      <!-- F · Anfrage -->
      <section id="anfrage" class="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-32">
        <HorizonGlow tone="mix" />
        <div class="container-site grid gap-16 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="reveal eyebrow">Anfrage</p>
            <h2 class="reveal heading mt-6">
              Lassen Sie uns <span class="accent">sprechen.</span>
            </h2>
            <div class="reveal mt-10 flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-ink-800 p-4">
              <img src="/eric-avatar.jpg" alt="Eric Dobler" width="56" height="56" class="h-14 w-14 flex-shrink-0 rounded-full border border-[var(--line-strong)] object-cover" loading="lazy" decoding="async" />
              <div>
                <p class="text-[14px] text-fg">Sie sprechen direkt mit Eric Dobler</p>
                <p class="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Gründer · kein Callcenter</p>
              </div>
            </div>
            <p class="reveal mt-8 text-[14px] text-muted">
              Lieber direkt anrufen:
              <a :href="site.phoneHref" class="whitespace-nowrap text-fg underline decoration-cantaloupe/60 underline-offset-4">{{ site.phone }}</a>
            </p>
          </div>
          <div class="reveal lg:col-span-7">
            <AnfrageFormular />
          </div>
        </div>
      </section>

      <!-- G · FAQ -->
      <FaqListe :items="faqReadyCheck" />
    </main>

    <FooterSection title="Wie bereit ist Ihr Betrieb" accent="für KI?" />
  </div>
</template>
