<script setup lang="ts">
// Haupt-CTA der Website: Button zum Anfrageformular + Mikrotext
const props = withDefaults(defineProps<{
  label?: string
  note?: string | false
  phone?: boolean
  center?: boolean
  onDark?: boolean
}>(), {
  label: 'AI Ready Check anfragen',
  note: undefined,
  phone: false,
  center: false,
  onDark: false,
})

const route = useRoute()
const text = computed(() => props.note === false
  ? ''
  : props.note ?? `Wert ${site.readyCheckValue}, für Energiebetriebe aktuell ohne Kosten. Eric meldet sich innerhalb eines Werktags.`)

// Auf /ai-ready-check selbst nur sanft zum Formular scrollen
function onClick(event: MouseEvent) {
  if (route.path.replace(/\/$/, '') === '/ai-ready-check') {
    event.preventDefault()
    useScrollTo('anfrage')
  }
}
</script>

<template>
  <div class="flex flex-col gap-4" :class="props.center ? 'items-center text-center' : 'items-start'">
    <div class="flex flex-wrap items-center gap-3" :class="{ 'justify-center': props.center }">
      <NuxtLink to="/ai-ready-check#anfrage" class="btn-primary" @click="onClick">
        {{ props.label }} <span class="arrow" aria-hidden="true">→</span>
      </NuxtLink>
      <slot />
    </div>
    <p v-if="text" class="max-w-md text-[13px] leading-6" :class="props.onDark ? 'text-white/85 [text-shadow:0_1px_10px_rgba(2,7,10,0.6)]' : 'text-muted'">{{ text }}</p>
    <p v-if="props.phone" class="text-[13px] text-muted">
      Lieber direkt anrufen:
      <a :href="site.phoneHref" class="whitespace-nowrap text-fg underline decoration-cantaloupe/60 underline-offset-4">{{ site.phone }}</a>
    </p>
  </div>
</template>
