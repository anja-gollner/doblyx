<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { value: '10', suffix: 'x', key: 'stats.roi' },
  { value: '85', suffix: '%', key: 'stats.time' },
  { value: '4', suffix: '', prefix: '<', key: 'stats.weeks' },
  { value: '100', suffix: '%', key: 'stats.custom' },
]

onMounted(async () => {
  const gsap = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count || 0)
    const target = { value: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.to(target, {
          value: end,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(target.value).toString()
          },
        })
      },
    })
  })
})
</script>

<template>
  <section class="border-t border-white/10 bg-[#0A1F44] px-6 py-20 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-7xl">
      <p class="reveal text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">In numbers</p>
      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.key"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <div class="text-[clamp(2.4rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-white">
            <span v-if="stat.prefix" class="mr-1">{{ stat.prefix }}</span>
            <span :data-count="stat.value">0</span>
            <span>{{ stat.suffix }}</span>
          </div>
          <div class="mt-3 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-400">{{ t(stat.key) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
