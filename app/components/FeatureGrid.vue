<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    number: '01',
    titleKey: 'features.strategy.title',
    descKey: 'features.strategy.description',
    icon: 'strategy',
  },
  {
    number: '02',
    titleKey: 'features.automation.title',
    descKey: 'features.automation.description',
    icon: 'automation',
  },
  {
    number: '03',
    titleKey: 'features.development.title',
    descKey: 'features.development.description',
    icon: 'development',
  },
]

const activeIndex = ref(0)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          activeIndex.value = index
        }
      })
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  )

  const triggers = document.querySelectorAll('.feature-trigger')
  triggers.forEach((el) => observer.observe(el))

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="services" ref="sectionRef" class="px-6" style="background: #FAFAFA">
    <div class="max-w-6xl mx-auto">
      <div class="divider" />

      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="pt-28 pb-16"
      >
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: #0A1F44">
          {{ t('features.label') }}
        </p>
        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] max-w-3xl" style="color: #0F1419">
          {{ t('features.title') }}
        </h2>
      </div>

      <!-- Sticky scroll layout -->
      <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-28">
        <!-- Left: scrolling feature triggers -->
        <div class="space-y-0">
          <div
            v-for="(feature, i) in features"
            :key="feature.number"
            :data-index="i"
            class="feature-trigger py-20 lg:py-32 first:pt-8"
          >
            <div
              class="transition-all duration-500"
              :style="activeIndex === i ? 'opacity: 1; transform: translateY(0)' : 'opacity: 0.25; transform: translateY(0)'"
            >
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[13px] font-bold tracking-wide" style="color: #0A1F44">{{ feature.number }}</span>
                <div class="h-px flex-1" style="background: #E0E0E0" />
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold mb-4 tracking-tight" style="color: #0F1419">
                {{ t(feature.titleKey) }}
              </h3>
              <p class="text-base leading-relaxed max-w-md" style="color: #777">
                {{ t(feature.descKey) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: sticky half-circle visual -->
        <div class="hidden lg:flex items-start">
          <div class="sticky top-[30vh] w-full">
            <div class="relative w-full aspect-square flex items-center justify-center">
              <!-- Half-circle background -->
              <div
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] w-[500px] h-[500px] rounded-full transition-all duration-700"
                style="background: linear-gradient(135deg, #0A1F44 0%, #132F5C 100%)"
              />

              <!-- Floating ring -->
              <div
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] w-[560px] h-[560px] rounded-full transition-all duration-700"
                style="border: 1px solid rgba(10,31,68,0.08)"
              />

              <!-- Active feature icon in center -->
              <div class="relative z-10 translate-x-[15%]">
                <div
                  class="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500"
                  style="background: rgba(255,255,255,0.95); box-shadow: 0 20px 60px rgba(10,31,68,0.2)"
                >
                  <!-- Strategy icon -->
                  <svg v-if="activeIndex === 0" class="w-10 h-10 transition-all duration-300" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                  <!-- Automation icon -->
                  <svg v-else-if="activeIndex === 1" class="w-10 h-10 transition-all duration-300" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <!-- Development icon -->
                  <svg v-else class="w-10 h-10 transition-all duration-300" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>

                <!-- Feature number label -->
                <div
                  class="mt-6 text-center transition-all duration-500"
                >
                  <span class="text-[11px] font-bold uppercase tracking-[0.15em]" style="color: white; opacity: 0.7">
                    {{ features[activeIndex].number }} / 03
                  </span>
                </div>
              </div>

              <!-- Decorative dots -->
              <div class="absolute top-[15%] right-[25%] w-2 h-2 rounded-full" style="background: rgba(10,31,68,0.08)" />
              <div class="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 rounded-full" style="background: rgba(10,31,68,0.06)" />
              <div class="absolute top-[40%] right-[8%] w-1 h-1 rounded-full" style="background: rgba(10,31,68,0.04)" />
            </div>
          </div>
        </div>

        <!-- Mobile: simple cards -->
        <div class="lg:hidden space-y-4">
          <div
            v-for="(feature, i) in features"
            :key="'mobile-' + feature.number"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 500 } }"
            class="card p-8"
          >
            <div class="flex items-center gap-4 mb-5">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(10,31,68,0.06)">
                <svg v-if="i === 0" class="w-5 h-5" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                <svg v-else-if="i === 1" class="w-5 h-5" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else class="w-5 h-5" style="color: #0A1F44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <span class="text-[13px] font-bold" style="color: #0A1F44">{{ feature.number }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-3" style="color: #0F1419">{{ t(feature.titleKey) }}</h3>
            <p class="text-[14px] leading-relaxed" style="color: #777">{{ t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
