<script setup lang="ts">
// Beispiel eines AI Ready Scores: Spinnendiagramm mit vier Dimensionen (Musterwerte, als Beispiel gekennzeichnet)
const score = 46
const axes = [
  { label: 'Prozessreife', value: 52 },
  { label: 'Datenqualität', value: 40 },
  { label: 'Technik', value: 55 },
  { label: 'Organisation', value: 38 },
]

// Achsen: oben, rechts, unten, links
const CX = 210
const CY = 172
const R = 104
const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]] as const
const point = (i: number, v: number) => `${CX + dirs[i][0] * R * v / 100},${CY + dirs[i][1] * R * v / 100}`
const rings = [25, 50, 75, 100].map((v) => axes.map((_, i) => point(i, v)).join(' '))
const shape = axes.map((a, i) => point(i, a.value)).join(' ')
// Beschriftung: Name und Wert zweizeilig, damit nichts über den Rand ragt
const labelPos = [
  { x: CX, y: CY - R - 32, anchor: 'middle' },
  { x: CX + R + 12, y: CY - 6, anchor: 'start' },
  { x: CX, y: CY + R + 20, anchor: 'middle' },
  { x: CX - R - 12, y: CY - 6, anchor: 'end' },
]
</script>

<template>
  <div class="relative">
    <div class="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-electric/25 via-transparent to-cantaloupe/25 blur-3xl" aria-hidden="true" />
    <figure class="glass-card p-7 sm:p-9">
      <div class="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
        <div>
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">AI Ready Score · Musterbetrieb</p>
          <p class="mt-2 font-serif text-5xl leading-none text-fg">{{ score }} <span class="text-2xl text-fg/40">/ 100</span></p>
        </div>
        <span class="rounded-full border border-cantaloupe/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cantaloupe">Beispiel</span>
      </div>

      <svg viewBox="0 0 420 344" class="mx-auto mt-4 w-full max-w-[28rem]" role="img" :aria-label="`Spinnendiagramm mit Musterwerten: ${axes.map((a) => `${a.label} ${a.value}`).join(', ')}`">
        <defs>
          <linearGradient id="score-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0297DE" stop-opacity="0.55" />
            <stop offset="100%" stop-color="#FC734D" stop-opacity="0.45" />
          </linearGradient>
        </defs>
        <polygon v-for="(ring, i) in rings" :key="i" :points="ring" fill="none" stroke="rgba(243,245,247,0.1)" />
        <line v-for="(_, i) in axes" :key="`a${i}`" :x1="CX" :y1="CY" :x2="CX + dirs[i][0] * R" :y2="CY + dirs[i][1] * R" stroke="rgba(243,245,247,0.1)" />
        <polygon :points="shape" fill="url(#score-fill)" stroke="#F3F5F7" stroke-opacity="0.8" stroke-width="1.5" />
        <circle v-for="(a, i) in axes" :key="`p${i}`" :cx="CX + dirs[i][0] * R * a.value / 100" :cy="CY + dirs[i][1] * R * a.value / 100" r="3.5" fill="#FC734D" />
        <text
          v-for="(a, i) in axes"
          :key="`t${i}`"
          :x="labelPos[i].x"
          :y="labelPos[i].y"
          :text-anchor="labelPos[i].anchor"
          class="font-mono"
          font-size="11"
          fill="#8C969F"
        >{{ a.label }}<tspan :x="labelPos[i].x" dy="16" fill="#F3F5F7" font-size="13">{{ a.value }}</tspan></text>
      </svg>

      <figcaption class="mt-4 border-t border-[var(--line)] pt-4 text-[12px] leading-5 text-muted">Beispielhafte Darstellung mit Musterwerten.</figcaption>
    </figure>
  </div>
</template>
