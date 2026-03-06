<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
  delay: number
}>()
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { delay, duration: 600 } }"
    class="card p-8 lg:p-10 group cursor-default"
  >
    <div class="text-[13px] font-semibold mb-6" style="color: #0A1F44">{{ number }}</div>
    <div class="mb-5">
      <slot name="icon" />
    </div>
    <h3 class="text-lg font-semibold mb-3" style="color: #0F1419">{{ title }}</h3>
    <p class="text-[14px] leading-relaxed" style="color: #777">{{ description }}</p>
  </div>
</template>
