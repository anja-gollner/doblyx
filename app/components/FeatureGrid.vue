<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    number: '01',
    titleKey: 'features.strategy.title',
    descKey: 'features.strategy.description',
    image: '/architecture.png',
  },
  {
    number: '02',
    titleKey: 'features.automation.title',
    descKey: 'features.automation.description',
    image: '/build.png',
  },
  {
    number: '03',
    titleKey: 'features.development.title',
    descKey: 'features.development.description',
    image: '/ai_print.png',
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

        <!-- Right: sticky image visual -->
        <div class="hidden lg:flex items-start">
          <div class="sticky top-[20vh] w-full">
            <div class="relative w-full overflow-hidden rounded-2xl" style="aspect-ratio: 4/3; box-shadow: 0 30px 80px rgba(10,31,68,0.15)">
              <!-- Crossfading images -->
              <img
                v-for="(feature, i) in features"
                :key="'img-' + i"
                :src="feature.image"
                :alt="t(feature.titleKey)"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                :style="activeIndex === i ? 'opacity: 1; transform: scale(1)' : 'opacity: 0; transform: scale(1.05)'"
              />

              <!-- Overlay gradient -->
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,31,68,0.6) 0%, transparent 50%)" />

              <!-- Feature number badge -->
              <div class="absolute bottom-6 left-6 flex items-center gap-3">
                <div class="px-3 py-1.5 rounded-full" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(12px)">
                  <span class="text-[11px] font-bold uppercase tracking-[0.15em]" style="color: white">
                    {{ features[activeIndex].number }} / 03
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile: cards with images -->
        <div class="lg:hidden space-y-6">
          <div
            v-for="(feature, i) in features"
            :key="'mobile-' + feature.number"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 500 } }"
            class="rounded-2xl overflow-hidden" style="background: white; border: 1px solid #EBEBEB"
          >
            <img :src="feature.image" :alt="t(feature.titleKey)" class="w-full h-48 object-cover" />
            <div class="p-7">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-[13px] font-bold" style="color: #0A1F44">{{ feature.number }}</span>
                <div class="h-px flex-1" style="background: #E0E0E0" />
              </div>
              <h3 class="text-lg font-semibold mb-3" style="color: #0F1419">{{ t(feature.titleKey) }}</h3>
              <p class="text-[14px] leading-relaxed" style="color: #777">{{ t(feature.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
