<script setup lang="ts">
// Ablauf-Karte: Branche, Titel und vier Schritte, optional verlinkt
const props = defineProps<{
  area: string
  title: string
  steps: string[]
  to?: string
}>()

const NuxtLinkComponent = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="props.to ? NuxtLinkComponent : 'article'"
    :to="props.to"
    class="reveal glass-card group block p-7 sm:p-8"
  >
    <div class="flex items-center justify-between">
      <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{{ props.area }}</span>
      <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-electric opacity-0 transition-opacity duration-500 group-hover:opacity-100">{{ props.to ? 'Mehr dazu →' : 'Automatisiert' }}</span>
    </div>
    <h3 class="mt-5 font-serif text-[1.75rem] leading-tight text-fg">{{ props.title }}</h3>

    <div class="relative mt-7 pl-6">
      <span class="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-electric via-electric/50 to-cantaloupe" aria-hidden="true" />
      <ol class="space-y-4">
        <li v-for="(step, i) in props.steps" :key="step" class="relative text-[14px] leading-snug text-fg/80">
          <span
            class="absolute -left-6 top-[5px] h-[11px] w-[11px] rounded-full border-2 border-ink"
            :class="i === props.steps.length - 1 ? 'bg-cantaloupe' : 'bg-electric'"
            aria-hidden="true"
          />
          {{ step }}
        </li>
      </ol>
    </div>
  </component>
</template>
