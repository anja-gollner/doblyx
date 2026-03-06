<script setup lang="ts">
const { t } = useI18n()

const items = [
  'marquee.item1', 'marquee.item2', 'marquee.item3', 'marquee.item4',
  'marquee.item5', 'marquee.item6', 'marquee.item7', 'marquee.item8',
]

const trackRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!trackRef.value) return
  const track = trackRef.value
  let pos = 0
  const speed = 0.5

  function animate() {
    pos -= speed
    // Reset when first set scrolls out
    const halfWidth = track.scrollWidth / 2
    if (Math.abs(pos) >= halfWidth) pos = 0
    track.style.transform = `translateX(${pos}px)`
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
})
</script>

<template>
  <section class="py-5 overflow-hidden" style="background: #0A1F44">
    <div ref="trackRef" class="flex items-center whitespace-nowrap" style="will-change: transform">
      <span
        v-for="(item, i) in [...items, ...items, ...items, ...items]"
        :key="i"
        class="inline-flex items-center gap-6 mx-6 text-[13px] font-medium uppercase tracking-[0.15em]"
        style="color: rgba(255,255,255,0.2)"
      >
        {{ t(item) }}
        <span class="w-1 h-1 rounded-full inline-block" style="background: rgba(255,255,255,0.12)" />
      </span>
    </div>
  </section>
</template>
