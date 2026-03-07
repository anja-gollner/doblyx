<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden" style="height: 420px">
    <img
      src="/office_architecture.png"
      alt="Modern office environment"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Dark overlay -->
    <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(10,31,68,0.85) 0%, rgba(10,31,68,0.4) 100%)" />

    <!-- Content -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="relative z-10 h-full flex items-center px-6"
    >
      <div class="max-w-6xl mx-auto w-full">
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: rgba(255,255,255,0.4)">
          {{ t('philosophy.label') }}
        </p>
        <h2 class="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight max-w-xl" style="color: white">
          {{ t('philosophy.highlight') }}
        </h2>
      </div>
    </div>
  </section>
</template>
