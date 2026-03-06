<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { value: '10x', key: 'stats.roi' },
  { value: '85%', key: 'stats.time' },
  { value: '<4', key: 'stats.weeks' },
  { value: '100%', key: 'stats.custom' },
]
</script>

<template>
  <section class="py-24 px-6" style="background: #FAFAFA">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.key"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 600 } }"
          class="text-center relative"
        >
          <div class="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold tracking-[-0.04em]" style="color: #0A1F44">{{ stat.value }}</div>
          <div class="mt-2 text-[13px] font-medium tracking-wide uppercase" style="color: #AAAAAA; letter-spacing: 0.08em">{{ t(stat.key) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
