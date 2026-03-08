<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Doblyx AI — Unser Prozess',
  meta: [
    { name: 'description', content: 'Vier klar definierte Phasen: Audit, Architektur, Build & Integrate, Scale & Optimize. So bauen wir Ihre KI-Systemarchitektur.' },
    { name: 'robots', content: 'index, follow' },
  ],
})

const phases = computed(() => [
  {
    key: 'processPage.phase1',
    image: '/architecture.png',
  },
  {
    key: 'processPage.phase2',
    image: '/process-safe.png',
  },
  {
    key: 'processPage.phase3',
    image: '/ai_print.png',
  },
  {
    key: 'processPage.phase4',
    image: '/office_architecture.png',
  },
])

const activePhase = ref(-1)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activePhase.value = Number(entry.target.getAttribute('data-phase'))
        }
      })
    },
    { rootMargin: '-30% 0px -30% 0px', threshold: 0 }
  )

  const els = document.querySelectorAll('.phase-section')
  els.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero -->
    <section class="relative flex items-center justify-center overflow-hidden px-6" style="min-height: 80vh; background: #0A1F44">
      <!-- Video background -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
        style="opacity: 0.2"
      >
        <source src="/process.mp4" type="video/mp4" />
      </video>

      <!-- Dark overlay on top of video -->
      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(10,31,68,0.7) 0%, rgba(10,31,68,0.85) 100%)" />

      <div class="relative z-10 text-center max-w-3xl mx-auto">
        <div class="animate-in flex items-center justify-center gap-3 mb-8" style="opacity: 0">
          <div class="w-8 h-px" style="background: rgba(255,255,255,0.2)" />
          <p class="text-[13px] font-medium uppercase tracking-[0.2em]" style="color: rgba(255,255,255,0.5)">
            {{ t('processPage.hero_tag') }}
          </p>
          <div class="w-8 h-px" style="background: rgba(255,255,255,0.2)" />
        </div>

        <h1 class="animate-in-delay-1 text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]" style="opacity: 0; color: white">
          {{ t('processPage.hero_title') }}
        </h1>

        <p class="animate-in-delay-2 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style="color: rgba(255,255,255,0.45); opacity: 0">
          {{ t('processPage.hero_subtitle') }}
        </p>

        <!-- Timeline mini preview -->
        <div class="animate-in-delay-3 mt-16 flex items-center justify-center gap-3 flex-wrap" style="opacity: 0">
          <div v-for="(phase, i) in phases" :key="i" class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-4 py-2 rounded-full" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)">
              <span class="text-[11px] font-bold" style="color: rgba(160,196,255,0.7)">{{ t(`${phase.key}.number`) }}</span>
              <span class="text-[11px] font-medium" style="color: rgba(255,255,255,0.4)">{{ t(`${phase.key}.title`) }}</span>
            </div>
            <div v-if="i < phases.length - 1" class="w-6 h-px hidden sm:block" style="background: rgba(255,255,255,0.1)" />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-in-delay-3" style="opacity: 0">
        <div class="w-5 h-8 rounded-full flex justify-center pt-1.5" style="border: 1px solid rgba(255,255,255,0.15)">
          <div class="w-0.5 h-2 rounded-full animate-bounce" style="background: rgba(255,255,255,0.3)" />
        </div>
      </div>
    </section>

    <!-- Timeline bar -->
    <section class="py-16 px-6" style="background: #FAFAFA">
      <div class="max-w-4xl mx-auto">
        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-center text-[13px] font-medium uppercase tracking-[0.15em] mb-10"
          style="color: #0A1F44"
        >
          {{ t('processPage.timeline_title') }}
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
          class="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div class="text-center p-6 rounded-2xl" style="background: white; border: 1px solid #EBEBEB">
            <span class="text-[11px] font-bold uppercase tracking-wider block mb-2" style="color: #0A1F44">{{ t('processPage.phase1.label') }}</span>
            <span class="text-2xl font-extrabold tracking-tight" style="color: #0F1419">{{ t('processPage.timeline_audit') }}</span>
          </div>
          <div class="text-center p-6 rounded-2xl" style="background: white; border: 1px solid #EBEBEB">
            <span class="text-[11px] font-bold uppercase tracking-wider block mb-2" style="color: #0A1F44">{{ t('processPage.phase2.label') }}</span>
            <span class="text-2xl font-extrabold tracking-tight" style="color: #0F1419">{{ t('processPage.timeline_architecture') }}</span>
          </div>
          <div class="text-center p-6 rounded-2xl" style="background: white; border: 1px solid #EBEBEB">
            <span class="text-[11px] font-bold uppercase tracking-wider block mb-2" style="color: #0A1F44">{{ t('processPage.phase3.label') }}</span>
            <span class="text-2xl font-extrabold tracking-tight" style="color: #0F1419">{{ t('processPage.timeline_build') }}</span>
          </div>
          <div class="text-center p-6 rounded-2xl" style="background: white; border: 1px solid #EBEBEB">
            <span class="text-[11px] font-bold uppercase tracking-wider block mb-2" style="color: #0A1F44">{{ t('processPage.phase4.label') }}</span>
            <span class="text-2xl font-extrabold tracking-tight" style="color: #0F1419">{{ t('processPage.timeline_scale') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Phases -->
    <div
      v-for="(phase, i) in phases"
      :key="phase.key"
      :data-phase="i"
      class="phase-section"
    >
      <section
        class="py-32 px-6 relative overflow-hidden"
        :style="i % 2 === 0 ? 'background: white' : 'background: #FAFAFA'"
      >
        <!-- Phase number watermark -->
        <div class="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
          <span class="text-[280px] font-extrabold leading-none" style="color: rgba(10,31,68,0.02)">
            {{ t(`${phase.key}.number`) }}
          </span>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" :class="i % 2 !== 0 ? 'lg:direction-rtl' : ''">
            <!-- Text content -->
            <div :class="i % 2 !== 0 ? 'lg:order-2' : ''">
              <div
                v-motion
                :initial="{ opacity: 0, y: 25 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
              >
                <div class="flex items-center gap-4 mb-6">
                  <span class="text-[13px] font-bold tracking-wide" style="color: #0A1F44">{{ t(`${phase.key}.number`) }}</span>
                  <span class="text-[11px] font-medium uppercase tracking-[0.15em]" style="color: #999">{{ t(`${phase.key}.label`) }}</span>
                </div>
                <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] mb-3" style="color: #0F1419">
                  {{ t(`${phase.key}.title`) }}
                </h2>
                <p class="text-lg font-medium mb-6" style="color: #0A1F44">
                  {{ t(`${phase.key}.subtitle`) }}
                </p>
                <p class="text-base leading-relaxed mb-10" style="color: #777">
                  {{ t(`${phase.key}.description`) }}
                </p>
              </div>

              <!-- Points -->
              <div class="space-y-6">
                <div
                  v-for="p in 3"
                  :key="p"
                  v-motion
                  :initial="{ opacity: 0, x: -20 }"
                  :visible-once="{ opacity: 1, x: 0, transition: { delay: p * 100, duration: 500 } }"
                  class="flex gap-4"
                >
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style="background: rgba(10,31,68,0.06)">
                    <svg class="w-4 h-4" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold mb-1" style="color: #0F1419">{{ t(`${phase.key}.point${p}_title`) }}</h4>
                    <p class="text-[13px] leading-relaxed" style="color: #888">{{ t(`${phase.key}.point${p}_desc`) }}</p>
                  </div>
                </div>
              </div>

              <!-- Outcome -->
              <div
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
                class="mt-10 p-6 rounded-xl"
                style="background: rgba(10,31,68,0.03); border-left: 3px solid #0A1F44"
              >
                <p class="text-[13px] leading-relaxed font-medium" style="color: #555">
                  {{ t(`${phase.key}.outcome`) }}
                </p>
              </div>
            </div>

            <!-- Image -->
            <div :class="i % 2 !== 0 ? 'lg:order-1' : ''">
              <div
                v-motion
                :initial="{ opacity: 0, scale: 0.95 }"
                :visible-once="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 700 } }"
                class="relative rounded-2xl overflow-hidden"
                style="aspect-ratio: 4/3; box-shadow: 0 30px 80px rgba(10,31,68,0.12)"
              >
                <img
                  :src="phase.image"
                  :alt="t(`${phase.key}.title`)"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Overlay -->
                <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,31,68,0.4) 0%, transparent 50%)" />

                <!-- Phase badge -->
                <div class="absolute bottom-5 left-5">
                  <div class="px-3 py-1.5 rounded-full" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(12px)">
                    <span class="text-[11px] font-bold uppercase tracking-[0.1em]" style="color: white">
                      {{ t(`${phase.key}.label`) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Connector between phases -->
      <div v-if="i < phases.length - 1" class="flex justify-center" :style="i % 2 === 0 ? 'background: #FAFAFA' : 'background: white'">
        <div class="w-px h-20" style="background: linear-gradient(to bottom, #E0E0E0, transparent)" />
      </div>
    </div>

    <!-- CTA Section -->
    <section class="py-32 px-6 relative overflow-hidden" style="background: #0A1F44">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 80px 80px" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full" style="opacity: 0.2; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 60%)" />

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="relative z-10 text-center max-w-2xl mx-auto"
      >
        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] mb-6" style="color: white">
          {{ t('processPage.cta_title') }}
        </h2>
        <p class="text-lg mb-10 leading-relaxed" style="color: rgba(255,255,255,0.45)">
          {{ t('processPage.cta_subtitle') }}
        </p>
        <NuxtLink
          :to="localePath('/') + '#contact'"
          class="group inline-flex items-center justify-center font-medium rounded-full px-10 py-4 text-[15px] transition-all duration-300"
          style="background: white; color: #0A1F44"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'"
        >
          {{ t('nav.cta') }}
          <svg class="ml-2 w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
