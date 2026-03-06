<script setup lang="ts">
const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const revealProgress = ref(0)

onMounted(() => {
  const handleScroll = () => {
    if (!sectionRef.value) return
    const rect = sectionRef.value.getBoundingClientRect()
    const windowH = window.innerHeight
    const start = windowH * 0.8
    const end = -rect.height * 0.3

    if (rect.top < start && rect.top > end) {
      const progress = (start - rect.top) / (start - end)
      revealProgress.value = Math.min(1, Math.max(0, progress))
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <section id="philosophy" ref="sectionRef" class="py-32 px-6 relative overflow-hidden" style="background: white">
    <!-- Subtle decorative element -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/2" style="background: radial-gradient(ellipse, rgba(10,31,68,0.03) 0%, transparent 70%)" />

    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
        <!-- Left: text reveal -->
        <div>
          <p
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="text-[13px] font-medium uppercase tracking-[0.15em] mb-6"
            style="color: #0A1F44"
          >
            {{ t('philosophy.label') }}
          </p>

          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: 80, duration: 500 } }"
            class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] mb-10"
            style="color: #0F1419"
          >
            {{ t('philosophy.title') }}
          </h2>

          <!-- Text with reveal animation -->
          <div class="space-y-6">
            <p
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
              class="text-base leading-relaxed"
              style="color: #777"
            >
              {{ t('philosophy.text1') }}
            </p>

            <p
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 250, duration: 500 } }"
              class="text-2xl lg:text-3xl font-bold leading-snug tracking-tight"
              style="color: #0A1F44"
            >
              {{ t('philosophy.highlight') }}
            </p>

            <p
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 350, duration: 500 } }"
              class="text-base leading-relaxed"
              style="color: #777"
            >
              {{ t('philosophy.text2') }}
            </p>
          </div>
        </div>

        <!-- Right: principles with stagger -->
        <div class="flex flex-col justify-center space-y-8">
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            class="relative pl-8"
            style="border-left: 2px solid #0A1F44"
          >
            <h4 class="text-base font-semibold mb-2" style="color: #0F1419">{{ t('philosophy.principle1_title') }}</h4>
            <p class="text-[14px] leading-relaxed" style="color: #999">{{ t('philosophy.principle1_desc') }}</p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { delay: 350, duration: 600 } }"
            class="relative pl-8"
            style="border-left: 2px solid rgba(10,31,68,0.2)"
          >
            <h4 class="text-base font-semibold mb-2" style="color: #0F1419">{{ t('philosophy.principle2_title') }}</h4>
            <p class="text-[14px] leading-relaxed" style="color: #999">{{ t('philosophy.principle2_desc') }}</p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            class="relative pl-8"
            style="border-left: 2px solid rgba(10,31,68,0.1)"
          >
            <h4 class="text-base font-semibold mb-2" style="color: #0F1419">{{ t('philosophy.principle3_title') }}</h4>
            <p class="text-[14px] leading-relaxed" style="color: #999">{{ t('philosophy.principle3_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
