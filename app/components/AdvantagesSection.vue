<script setup lang="ts">
const { t } = useI18n()

const items = [
  { key: 'advantages.item1', icon: 'link' },
  { key: 'advantages.item2', icon: 'shield' },
  { key: 'advantages.item3', icon: 'bolt' },
  { key: 'advantages.item4', icon: 'heart' },
]

const scrollContainer = ref<HTMLElement | null>(null)
const activeCard = ref(0)

onMounted(() => {
  if (!scrollContainer.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeCard.value = Number(entry.target.getAttribute('data-card-index'))
        }
      })
    },
    { root: scrollContainer.value, rootMargin: '0px', threshold: 0.6 }
  )

  const cards = scrollContainer.value.querySelectorAll('.advantage-card')
  cards.forEach((card) => observer.observe(card))

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section class="py-32 px-6" style="background: #FAFAFA">
    <div class="max-w-6xl mx-auto">
      <div class="divider mb-20" />

      <div
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-16"
      >
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: #0A1F44">
          {{ t('advantages.label') }}
        </p>
        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] max-w-3xl" style="color: #0F1419">
          {{ t('advantages.title') }}
        </h2>
      </div>

      <!-- Desktop: grid -->
      <div class="hidden md:grid grid-cols-2 gap-6">
        <div
          v-for="(item, i) in items"
          :key="item.key"
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 600 } }"
          class="group rounded-2xl p-10 transition-all duration-500 cursor-default relative overflow-hidden"
          style="background: white; border: 1px solid #EBEBEB"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = '#D5D5D5'; ($event.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.06)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = '#EBEBEB'; ($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
        >
          <!-- Background number -->
          <span class="absolute -right-3 -top-6 text-[120px] font-extrabold leading-none pointer-events-none select-none" style="color: rgba(10,31,68,0.03)">
            {{ t(`${item.key}.number`) }}
          </span>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-[13px] font-bold tracking-wide" style="color: #0A1F44">{{ t(`${item.key}.number`) }}</span>
              <div class="h-px flex-1" style="background: #E0E0E0" />
            </div>
            <h3 class="text-xl font-bold mb-3 tracking-tight" style="color: #0F1419">
              {{ t(`${item.key}.title`) }}
            </h3>
            <p class="text-[14px] leading-relaxed" style="color: #777">
              {{ t(`${item.key}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile: horizontal scroll -->
      <div ref="scrollContainer" class="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto scroll-snap-x pb-4" style="-webkit-overflow-scrolling: touch">
        <div
          v-for="(item, i) in items"
          :key="'m-' + item.key"
          :data-card-index="i"
          class="advantage-card flex-shrink-0 w-[85vw] rounded-2xl p-8 relative overflow-hidden"
          style="background: white; border: 1px solid #EBEBEB"
        >
          <span class="absolute -right-2 -top-4 text-[100px] font-extrabold leading-none pointer-events-none select-none" style="color: rgba(10,31,68,0.03)">
            {{ t(`${item.key}.number`) }}
          </span>
          <div class="relative z-10">
            <span class="text-[13px] font-bold tracking-wide mb-4 block" style="color: #0A1F44">{{ t(`${item.key}.number`) }}</span>
            <h3 class="text-lg font-bold mb-3" style="color: #0F1419">{{ t(`${item.key}.title`) }}</h3>
            <p class="text-[14px] leading-relaxed" style="color: #777">{{ t(`${item.key}.description`) }}</p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator dots (mobile) -->
      <div class="md:hidden flex justify-center gap-2 mt-6">
        <div
          v-for="(_, i) in items"
          :key="'dot-' + i"
          class="w-1.5 h-1.5 rounded-full transition-all duration-300"
          :style="activeCard === i ? 'background: #0A1F44; transform: scale(1.3)' : 'background: #D5D5D5'"
        />
      </div>
    </div>
  </section>
</template>
