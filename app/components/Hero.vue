<script setup lang="ts">
const canvasRef = ref<HTMLElement | null>(null)
useShaderHero(canvasRef)

const badges = ['AI Ready Check · 45–60 Min.', 'Ihr KI-Score über 4 Dimensionen', 'Direkt mit dem Gründer']
const titleWords = ['KI', 'für', 'Solar-,', 'Wärmepumpen-', 'und', 'Elektrobetriebe.']

// Echte Pixelmaße, damit das Layout beim Laden nicht springt
const heroImg = {
  build: { src: '/hero/build.jpg', w: 720, h: 402 },
  architecture: { src: '/hero/architecture.jpg', w: 720, h: 408 },
  aiPrint: { src: '/hero/ai_print.jpg', w: 720, h: 434 },
  office: { src: '/hero/office_architecture.jpg', w: 720, h: 479 },
  safe: { src: '/hero/process-safe.jpg', w: 720, h: 417 },
}

const tiles = [
  { label: 'Photovoltaik', img: heroImg.build, pos: 'center' },
  { label: 'Wärmepumpen', img: heroImg.architecture, pos: '60% center' },
  { label: 'Elektrotechnik', img: heroImg.aiPrint, pos: '70% center' },
  { label: 'Speicher', img: heroImg.office, pos: 'center' },
  { label: 'Wallbox', img: heroImg.safe, pos: '40% center' },
  { label: 'Service & Wartung', img: heroImg.build, pos: '25% center' },
]

const filmstrip = [heroImg.office, heroImg.build, heroImg.aiPrint, heroImg.architecture]

const offerLines = ['Module', 'Wechselrichter', 'Speicher', 'Montage']

const flowTicks = ['08:00', '08:05', '08:10', '08:15', '08:20', '08:25', '08:30']
const flowNodes = ['E-Mail', 'KI', 'CRM', 'Kalender']

// Live-Zustände der Karten (Startwerte = fertiger Zustand, falls keine Animation läuft)
const typed = ref<string[]>([...offerLines])
const checked = ref<boolean[]>(offerLines.map(() => true))
const typingLine = ref(-1)
const activeNode = ref(1)
const flowDone = ref(false)
const minute = ref(17)

let alive = true
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Mitte: Angebotszeilen tippen sich nacheinander, Häkchen ploppen ein, dann Neustart
async function runOffer() {
  while (alive) {
    typed.value = offerLines.map(() => '')
    checked.value = offerLines.map(() => false)
    await sleep(500)
    for (let i = 0; i < offerLines.length && alive; i++) {
      typingLine.value = i
      for (const char of offerLines[i]) {
        typed.value[i] += char
        await sleep(38)
      }
      typingLine.value = -1
      await sleep(180)
      checked.value[i] = true
      await sleep(320)
    }
    await sleep(4200)
  }
}

// Rechts: Schritte leuchten nacheinander auf, beim Kalender ist der Termin gebucht
async function runFlow() {
  while (alive) {
    for (let i = 0; i < flowNodes.length && alive; i++) {
      activeNode.value = i
      flowDone.value = i === flowNodes.length - 1
      await sleep(1400)
    }
    minute.value = minute.value >= 59 ? 10 : minute.value + 1
  }
}

onBeforeUnmount(() => { alive = false })

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.3 } })
    // abgestimmt auf den „Sonnenaufgang“ im Shader: erst Licht, dann Text, dann Karten
    .from('.hero-title .word', { filter: 'blur(12px)', opacity: 0, duration: 1.6, stagger: 0.09 }, 1.05)
    .to('.hero-title .word', { y: '0%', stagger: 0.09 }, 1.05)
    .from('.hero-late', { opacity: 0, y: 18, stagger: 0.09, duration: 1.2 }, 1.6)
    .from('.hero-card', { opacity: 0, y: 160, stagger: 0.12, duration: 1.8 }, 1.75)

  // Karten erst „arbeiten“ lassen, wenn sie eingeblendet sind
  setTimeout(() => { runOffer(); runFlow() }, 2600)
})
</script>

<template>
  <section class="relative isolate min-h-[100svh] overflow-hidden bg-[#02070A]">
    <!-- CSS-Fallback (ohne WebGL), darüber der animierte Shader -->
    <div class="hero-fallback absolute inset-0 -z-10" aria-hidden="true" />
    <div ref="canvasRef" class="absolute inset-0 -z-10" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent to-[#02070A]" aria-hidden="true" />

    <div class="relative mx-auto flex min-h-[100svh] max-w-[90rem] flex-col items-center px-5 pt-32 text-center sm:px-8 sm:pt-36 lg:pt-[15vh]">
      <p class="hero-late eyebrow !text-white/80 max-sm:!tracking-[0.16em] max-sm:before:hidden">Für Solar-, Wärmepumpen- und Elektrobetriebe</p>

      <h1 class="hero-title mt-6 max-w-[68rem] font-serif text-[clamp(2.4rem,5.4vw,5.4rem)] font-normal leading-[1.02] tracking-[-0.01em] text-white">
        <template v-for="(word, i) in titleWords" :key="word"><span class="word-mask"><span class="word" :class="{ italic: i === titleWords.length - 1 }">{{ word }}</span></span>{{ ' ' }}</template>
      </h1>

      <p class="hero-late mt-7 max-w-[46rem] font-mono text-[13px] leading-6 text-white/85 sm:text-[15px] sm:leading-[1.65]">
        Wir automatisieren Anfragen, Angebote und Papierkram, damit Ihr Büro mit den Aufträgen mithält und Ihr Team wieder Zeit für Kunden und Baustelle hat.
      </p>

      <CtaReadyCheck class="hero-late mt-9" center on-dark>
        <a :href="site.phoneHref" class="btn-ghost !border-white/30 text-white hover:!border-white">Anrufen</a>
      </CtaReadyCheck>

      <ul class="hero-late mt-7 flex flex-wrap justify-center gap-2">
        <li v-for="badge in badges" :key="badge" class="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[10.5px] text-white/85 backdrop-blur-md">{{ badge }}</li>
      </ul>

      <div class="hero-late mt-6 flex items-center gap-3 text-left">
        <img src="/eric-avatar.jpg" alt="Eric Dobler" width="56" height="56" class="h-14 w-14 rounded-full border border-white/30 object-cover" decoding="async" />
        <p class="text-[13.5px] text-white/85">Sie sprechen direkt mit Eric Dobler, Gründer.</p>
      </div>

      <!-- Vorschau-Karten am unteren Rand: Glas mit Verlaufsrand, edle Innenflächen -->
      <div class="relative mt-auto w-full pt-12 [perspective:1800px]" aria-hidden="true">
        <div class="mx-auto -mb-[9vh] grid max-w-[80rem] grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          <!-- Karte 1: Einsatzbereiche (Foto-Galerie auf Elfenbein) -->
          <div class="hero-card hidden text-left md:block md:[transform:rotateX(6deg)_rotateY(8deg)]">
            <p class="card-label">Einsatzbereiche</p>
            <div class="card-frame">
              <div class="panel flex h-full flex-col bg-[#f7f2ec]/95">
                <div class="grid flex-1 grid-cols-3 grid-rows-2 gap-2">
                  <div v-for="(tile, ti) in tiles" :key="tile.label" class="tile group/tile relative overflow-hidden rounded-[0.9rem] bg-ink">
                    <img :src="tile.img.src" :width="tile.img.w" :height="tile.img.h" alt="" class="kenburns absolute inset-0 h-full w-full object-cover" :style="{ objectPosition: tile.pos, animationDelay: `${-ti * 2.3}s` }" loading="eager" :fetchpriority="ti === 0 ? 'high' : undefined" decoding="async" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-white/20 text-[8px] leading-none text-white backdrop-blur-md">•••</span>
                    <span class="absolute bottom-1.5 left-1.5 rounded-full border border-white/25 bg-black/25 px-2 py-[2px] font-mono text-[8.5px] text-white backdrop-blur-md">{{ tile.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Karte 2: KI-Angebotsentwurf (Rosé-Glas, Dokument-Optik) -->
          <div class="hero-card text-left">
            <p class="card-label">Angebotsentwurf PV-Anlage</p>
            <div class="card-frame">
              <div class="panel flex h-full flex-col bg-gradient-to-b from-white/[0.92] via-[#fdf1ec]/90 to-[#f9d6c8]/85">
                <div class="flex items-center justify-between">
                  <div class="flex rounded-full border border-ink/[0.08] bg-white/60 p-0.5 font-mono text-[9.5px]">
                    <span class="rounded-full bg-ink px-2.5 py-0.5 text-white">Angebot</span>
                    <span class="px-2.5 py-0.5 text-ink/40">Positionen</span>
                  </div>
                  <span class="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0297DE] to-[#5bb8ea] px-2.5 py-1 font-mono text-[9.5px] text-white shadow-[0_6px_16px_-6px_rgba(2,151,222,0.8)]" :class="{ 'is-working': typingLine >= 0 }">
                    <svg class="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" /></svg>
                    Auto-Entwurf
                  </span>
                </div>
                <p class="mt-4 font-serif text-[1.45rem] leading-none text-ink">Angebot <span class="italic text-ink/50">Entwurf</span></p>
                <ul class="mt-3">
                  <li v-for="(line, i) in offerLines" :key="line" class="flex min-h-[1.8rem] items-center justify-between border-b border-ink/[0.07] py-1.5 text-[11.5px] text-ink/75">
                    <span>{{ typed[i] }}<span v-if="typingLine === i" class="caret" /></span>
                    <span class="check flex h-4 w-4 items-center justify-center rounded-full bg-[#0297DE]/12 text-[9px] text-[#0297DE]" :class="{ 'is-on': checked[i] }">✓</span>
                  </li>
                </ul>
                <div class="relative mt-auto h-14">
                  <svg class="absolute inset-0 h-full w-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <g stroke="#0297DE" stroke-opacity=".18" stroke-width="1.2">
                      <line v-for="n in 74" :key="n" :x1="n * 4" :x2="n * 4" :y1="30 - ((n * 37) % 17) - 3" :y2="30 + ((n * 37) % 17) + 3" />
                    </g>
                    <path d="M0 34 C 30 18, 55 46, 85 30 S 140 14, 170 32 S 230 48, 300 26" fill="none" stroke="#0297DE" stroke-width="1.3" />
                    <path d="M0 40 C 35 52, 70 22, 110 36 S 170 50, 210 34 S 265 22, 300 38" fill="none" stroke="#FC734D" stroke-opacity=".9" stroke-width="1.3" />
                  </svg>
                  <span class="absolute left-[56%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-[2.5px] border-white bg-[#0297DE] shadow-[0_0_0_4px_rgba(2,151,222,0.15)]" />
                </div>
              </div>
            </div>
          </div>

          <!-- Karte 3: Workflow-Zeitleiste (Mitternachtsblau, schräg) -->
          <div class="hero-card hidden text-left md:block md:[transform:rotateY(-10deg)_rotateZ(7deg)_translateY(-10px)]">
            <p class="card-label">Workflow · live</p>
            <div class="card-frame">
              <div class="panel flex h-full flex-col bg-gradient-to-b from-[#0d1a42] to-[#070f2b] text-white">
                <div class="flex justify-between font-mono text-[8.5px] text-white/45">
                  <span v-for="tick in flowTicks" :key="tick">{{ tick }}</span>
                </div>
                <div class="relative mt-2 h-px bg-white/15">
                  <div class="playhead-trail absolute inset-y-0 left-0 bg-gradient-to-r from-transparent to-[#4fb8ec]" />
                  <div class="playhead-line absolute -top-[6px] h-[13px] w-[2px] rounded bg-white shadow-[0_0_10px_2px_rgba(79,184,236,0.8)]" />
                </div>
                <!-- Foto-Filmstreifen mit Abspielmarke -->
                <div class="relative mt-3 flex gap-1 rounded-[0.7rem] border border-white/10 bg-black/30 p-1">
                  <div v-for="(img, i) in filmstrip" :key="i" class="relative h-12 flex-1 overflow-hidden rounded-[0.45rem]">
                    <img :src="img.src" :width="img.w" :height="img.h" alt="" class="absolute inset-0 h-full w-full object-cover" loading="eager" decoding="async" />
                  </div>
                  <span class="playhead pointer-events-none absolute inset-y-0 w-[30%] rounded-[0.5rem] border-2 border-white/90 shadow-[0_0_14px_rgba(79,184,236,0.6)]" />
                </div>
                <div class="mt-3 flex items-center gap-1.5">
                  <template v-for="(node, i) in flowNodes" :key="node">
                    <span
                      class="flex-1 rounded-[0.6rem] py-2 text-center font-mono text-[9.5px] transition-all duration-500"
                      :class="i === activeNode ? 'border border-[#4fb8ec]/70 bg-[#4fb8ec]/15 text-white shadow-[0_0_18px_-4px_rgba(79,184,236,0.9)]' : 'border border-white/[0.08] bg-white/[0.04] text-white/70'"
                    >{{ node }}</span>
                    <span v-if="i < flowNodes.length - 1" class="h-px w-2 bg-white/20" />
                  </template>
                </div>
                <div class="booked mt-3.5 flex items-center gap-2 rounded-[0.6rem] bg-gradient-to-r from-[#FC734D] to-[#fd9a7d] px-3 py-2 font-mono text-[9.5px] text-white shadow-[0_10px_24px_-10px_rgba(252,115,77,0.9)]" :class="{ 'is-done': flowDone }">
                  <span class="flex h-4 w-4 items-center justify-center rounded bg-white/25 text-[8px]">▸</span>
                  PV-Anfrage → Termin gebucht
                </div>
                <div class="mt-2 flex items-center justify-between rounded-[0.6rem] border border-white/[0.08] bg-white/[0.04] px-3 py-2 font-mono text-[9.5px] text-white/70">
                  <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-[#4fb8ec]" />CRM-Eintrag angelegt</span>
                  <span class="text-white/35">08:{{ String(minute).padStart(2, '0') }}</span>
                </div>
                <div class="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-2.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/40">
                  <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Läuft</span>
                  <span>0 Fehler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-fallback {
  background:
    radial-gradient(45% 50% at 50% 105%, #fdb59d 0%, #fc734d 30%, transparent 70%),
    radial-gradient(70% 70% at 50% 100%, rgba(2, 151, 222, 0.75), transparent 75%),
    linear-gradient(180deg, #050a1c 0%, #0a1a4a 60%, #1a2a6a 100%);
}

.js .hero-fallback {
  opacity: 0;
  transition: opacity 1.2s ease;
}

.js .hero-fallback.is-visible {
  opacity: 1;
}

.card-label {
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
}

.card-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 0.55rem;
  border-radius: 9999px;
  background: #fff;
  vertical-align: middle;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
}

/* Glas-Rahmen mit Verlaufsrand (oben hell, unten verlaufend) und tiefem, weichem Schatten */
.card-frame {
  position: relative;
  height: clamp(250px, 36vh, 420px);
  border-radius: 1.9rem;
  padding: 0.6rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06));
  box-shadow:
    0 40px 80px -30px rgba(4, 10, 40, 0.55),
    0 10px 30px -15px rgba(252, 115, 77, 0.35);
  backdrop-filter: blur(22px) saturate(150%);
}

.card-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.15) 55%, rgba(255, 255, 255, 0.35));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Innenfläche: feine Haarlinie und leichter Innenschatten */
.panel {
  height: 100%;
  border-radius: 1.35rem;
  padding: 0.9rem;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 2px 10px -4px rgba(0, 0, 0, 0.2);
}

.tile {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 6px 14px -8px rgba(0, 0, 0, 0.5);
}

/* --- Live-Animationen der Karten --- */
.caret {
  display: inline-block;
  width: 1px;
  height: 0.95em;
  margin-left: 1px;
  vertical-align: -0.1em;
  background: #0297DE;
  animation: caret-blink 0.8s steps(1) infinite;
}

@keyframes caret-blink {
  50% { opacity: 0; }
}

.check {
  transform: scale(0.4);
  opacity: 0;
  transition: transform 0.45s cubic-bezier(0.34, 1.8, 0.5, 1), opacity 0.3s ease;
}

.check.is-on {
  transform: scale(1);
  opacity: 1;
}

.is-working {
  animation: working-pulse 1.1s ease-in-out infinite;
}

@keyframes working-pulse {
  50% { box-shadow: 0 0 0 4px rgba(2, 151, 222, 0.18), 0 6px 18px -4px rgba(2, 151, 222, 0.9); }
}

.kenburns {
  animation: kenburns 14s ease-in-out infinite alternate;
}

@keyframes kenburns {
  from { transform: scale(1) translate(0, 0); }
  to { transform: scale(1.14) translate(-3%, -2%); }
}

/* Abspielmarke: läuft über den Filmstreifen (4 Schritte × 1,4 s) */
.playhead {
  animation: playhead 5.6s linear infinite;
}

.playhead-line {
  animation: playhead-line 5.6s linear infinite;
}

.playhead-trail {
  animation: playhead-trail 5.6s linear infinite;
}

@keyframes playhead {
  from { left: 1%; }
  to { left: 69%; }
}

@keyframes playhead-line {
  from { left: 5%; }
  to { left: 95%; }
}

@keyframes playhead-trail {
  from { width: 5%; }
  to { width: 95%; }
}

.booked {
  transition: transform 0.5s cubic-bezier(0.34, 1.6, 0.5, 1), box-shadow 0.5s ease, filter 0.5s ease;
  filter: saturate(0.75) brightness(0.9);
}

.booked.is-done {
  transform: scale(1.03);
  filter: none;
  box-shadow: 0 0 0 3px rgba(252, 115, 77, 0.25), 0 14px 30px -10px rgba(252, 115, 77, 1);
}

@media (prefers-reduced-motion: reduce) {
  .kenburns,
  .playhead,
  .playhead-line,
  .playhead-trail,
  .caret {
    animation: none;
  }
}
</style>
