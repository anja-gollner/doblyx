<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const steps = [
  { number: '01', key: 'process.step1' },
  { number: '02', key: 'process.step2' },
  { number: '03', key: 'process.step3' },
  { number: '04', key: 'process.step4' },
]
</script>

<template>
  <section id="process" class="py-32 px-6" style="background: white">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center max-w-2xl mx-auto mb-24"
      >
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: #0A1F44">
          {{ t('process.label') }}
        </p>
        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]" style="color: #0F1419">
          {{ t('process.title') }}
        </h2>
      </div>

      <!-- Steps with connecting line -->
      <div class="relative">
        <!-- Connecting line (desktop) -->
        <div class="hidden md:block absolute top-7 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, #E0E0E0 10%, #E0E0E0 90%, transparent)" />

        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 120, duration: 600 } }"
            class="text-center relative"
          >
            <!-- Number circle -->
            <div class="relative z-10 w-14 h-14 rounded-full mx-auto mb-8 flex items-center justify-center" style="background: white; border: 2px solid #0A1F44">
              <span class="text-sm font-bold" style="color: #0A1F44">{{ step.number }}</span>
            </div>

            <h3 class="text-base font-semibold mb-3" style="color: #0F1419">
              {{ t(`${step.key}.title`) }}
            </h3>
            <p class="text-[13px] leading-relaxed max-w-[220px] mx-auto" style="color: #999">
              {{ t(`${step.key}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="mt-28 text-center py-20 px-8 rounded-3xl relative overflow-hidden"
        style="background: #0A1F44"
      >
        <!-- Quote bg glow -->
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full" style="opacity: 0.15; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

        <blockquote class="relative z-10 text-[clamp(1.25rem,3vw,2rem)] font-medium leading-snug tracking-tight max-w-2xl mx-auto" style="color: rgba(255,255,255,0.9)">
          {{ t('process.quote') }}
        </blockquote>
        <p class="relative z-10 mt-6 text-[13px] font-medium" style="color: rgba(255,255,255,0.4)">
          {{ t('process.quote_author') }}
        </p>
        <NuxtLink
          :to="localePath('/prozess')"
          class="relative z-10 inline-flex items-center justify-center mt-8 font-medium rounded-full px-8 py-3 text-[13px] transition-all duration-300"
          style="background: white; color: #0A1F44"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'"
        >
          {{ t('hero.learn_more') }}
          <svg class="ml-2 w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
