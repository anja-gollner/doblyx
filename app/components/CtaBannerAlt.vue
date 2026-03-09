<script setup lang="ts">
const { t } = useI18n()

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="py-16 px-6" style="background: white">
    <div class="max-w-4xl mx-auto text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <p class="text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-snug tracking-tight mb-6" style="color: #0F1419">
          {{ t('ctaBannerAlt.text') }}
        </p>
        <button
          class="group inline-flex items-center justify-center font-semibold rounded-full px-8 py-3.5 text-[15px] transition-all duration-300 cursor-pointer"
          style="background: #0A1F44; color: white"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(10,31,68,0.25)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
          @click="scrollToSection('contact')"
        >
          {{ t('nav.cta') }}
          <svg class="ml-2 w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </button>
      </div>
    </div>
  </section>
</template>
