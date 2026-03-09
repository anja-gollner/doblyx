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

      <!-- Quote + CTA -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="mt-28 relative overflow-hidden rounded-2xl"
        style="background: #050D1A"
      >
        <!-- Ambient glows (matching hero style) -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full" style="opacity: 0.2; background: radial-gradient(ellipse, #0A2A5C 0%, transparent 65%)" />
        <div class="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full" style="opacity: 0.1; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

        <!-- Grid overlay -->
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px" />

        <div class="relative z-10 py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <!-- Quote -->
          <div class="flex-1 text-center md:text-left">
            <svg class="w-8 h-8 mb-6 mx-auto md:mx-0" style="color: rgba(96,165,250,0.25)" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote class="text-[clamp(1.15rem,2.5vw,1.65rem)] font-semibold leading-snug tracking-[-0.01em]" style="color: rgba(255,255,255,0.9)">
              {{ t('process.quote') }}
            </blockquote>
            <div class="mt-6 flex items-center gap-3 justify-center md:justify-start">
              <div class="w-8 h-px" style="background: rgba(255,255,255,0.15)" />
              <p class="text-[13px] font-medium" style="color: rgba(255,255,255,0.35)">
                {{ t('process.quote_author') }}
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex-shrink-0 text-center">
            <NuxtLink
              :to="localePath('/prozess')"
              class="group inline-flex items-center justify-center font-semibold rounded-full px-8 py-3.5 text-[15px] transition-all duration-300"
              style="background: white; color: #0A1F44"
              @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'"
              @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
            >
              {{ t('hero.learn_more') }}
              <svg class="ml-2 w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
