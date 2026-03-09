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
    <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(10,31,68,0.9) 0%, rgba(10,31,68,0.65) 100%)" />

    <!-- Content -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="relative z-10 h-full flex items-center px-6"
    >
      <div class="max-w-6xl mx-auto w-full">
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-6" style="color: rgba(255,255,255,0.4)">
          {{ t('socialProof.label') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div
            v-for="(item, i) in ['socialProof.case1', 'socialProof.case2', 'socialProof.case3']"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 120, duration: 500 } }"
          >
            <div class="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-2" style="color: white">
              {{ t(`${item}.metric`) }}
            </div>
            <p class="text-[14px] font-medium mb-1" style="color: rgba(255,255,255,0.7)">
              {{ t(`${item}.description`) }}
            </p>
            <p class="text-[12px]" style="color: rgba(255,255,255,0.35)">
              {{ t(`${item}.source`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
