<script setup lang="ts">
const { t, locale } = useI18n()

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative overflow-hidden" style="background: #050D1A">
    <!-- Ambient glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full" style="opacity: 0.25; background: radial-gradient(ellipse, #0A2A5C 0%, transparent 65%)" />
    <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style="opacity: 0.1; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full" style="opacity: 0.08; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

    <!-- Subtle grid overlay -->
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 80px 80px" />

    <!-- Content -->
    <div class="relative z-10 pt-40 pb-8 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Announcement pill -->
        <div class="animate-in flex items-center justify-center mb-10" style="opacity: 0">
          <div
            class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)"
          >
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style="background: #3B82F6; color: white">
              {{ locale === 'en' ? 'New' : 'Neu' }}
            </span>
            <span class="text-[12px] font-medium" style="color: rgba(255,255,255,0.5)">
              {{ locale === 'en' ? 'AI System Architecture for the Mittelstand' : 'KI-Systemarchitektur für den Mittelstand' }}
            </span>
            <svg class="w-3.5 h-3.5" style="color: rgba(255,255,255,0.3)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

        <!-- Headline -->
        <h1 class="animate-in-delay-1 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.03em]" style="opacity: 0; color: white">
          {{ t('hero.line1') }}
          <br />
          <template v-if="locale === 'en'">
            <span style="font-style: italic; background: linear-gradient(135deg, #60A5FA, #818CF8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text">X-fold your Impact.</span>
          </template>
          <template v-else>
            <span style="font-style: italic; background: linear-gradient(135deg, #60A5FA, #818CF8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text">Maximale Wirkung.</span>
          </template>
        </h1>

        <!-- Subtitle -->
        <p class="animate-in-delay-2 mt-7 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style="color: rgba(255,255,255,0.45); opacity: 0">
          {{ t('hero.subtitle') }}
        </p>

        <!-- CTAs -->
        <div class="animate-in-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4" style="opacity: 0">
          <button
            class="group inline-flex items-center justify-center font-semibold rounded-full px-8 py-3.5 text-[15px] transition-all duration-300 cursor-pointer"
            style="background: white; color: #0A1F44"
            @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'"
            @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
            @click="scrollToSection('contact')"
          >
            {{ t('nav.cta') }}
          </button>
          <button
            class="group inline-flex items-center justify-center font-medium rounded-full px-8 py-3.5 text-[15px] transition-all duration-300 cursor-pointer"
            style="color: rgba(255,255,255,0.6)"
            @mouseenter="($event.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'"
            @mouseleave="($event.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'"
            @click="scrollToSection('services')"
          >
            {{ t('hero.learn_more') }}
            <svg class="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <!-- Trust badges -->
        <div class="animate-in-delay-3 mt-12 flex items-center justify-center gap-6 md:gap-8 flex-wrap" style="opacity: 0">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span class="text-[12px] font-medium" style="color: rgba(255,255,255,0.35)">{{ t('hero.trust1') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
            <span class="text-[12px] font-medium" style="color: rgba(255,255,255,0.35)">{{ t('hero.trust2') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span class="text-[12px] font-medium" style="color: rgba(255,255,255,0.35)">{{ t('hero.trust3') }}</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-20 flex justify-center animate-in-delay-3" style="opacity: 0">
        <div class="w-5 h-8 rounded-full flex justify-center pt-1.5" style="border: 1px solid rgba(255,255,255,0.15)">
          <div class="w-0.5 h-2 rounded-full animate-bounce" style="background: rgba(255,255,255,0.3)" />
        </div>
      </div>
    </div>

    <!-- Bottom fade into next section -->
    <div class="h-16" style="background: linear-gradient(to bottom, #050D1A, #0A1F44)" />
  </section>
</template>
