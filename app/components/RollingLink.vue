<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
  label: string
  className?: string
}>()
</script>

<template>
  <component
    :is="props.to ? 'NuxtLink' : 'a'"
    :href="props.href"
    :to="props.to"
    class="group rolling-link relative inline-flex items-center overflow-hidden leading-tight"
    :class="props.className"
  >
    <span class="block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-full">
      {{ props.label }}
    </span>
    <span class="absolute inset-0 flex translate-y-full items-center text-cantaloupe transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" aria-hidden="true">
      {{ props.label }}
    </span>
  </component>
</template>
