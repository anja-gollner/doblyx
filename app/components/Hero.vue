<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <section class="section-dark relative flex flex-col items-center justify-center overflow-hidden px-6" style="min-height: 100vh; min-height: 100dvh; background: #0A1F44">
    <!-- Subtle grid -->
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 80px 80px" />

    <!-- Primary ambient glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] rounded-full" style="opacity: 0.35; background: radial-gradient(ellipse, #132F5C 0%, transparent 60%)" />

    <!-- Secondary glow - top right -->
    <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full" style="opacity: 0.12; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

    <!-- Tertiary glow - bottom left -->
    <div class="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full" style="opacity: 0.1; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <!-- Eyebrow -->
      <div class="animate-in flex items-center justify-center gap-3 mb-10" style="opacity: 0">
        <div class="w-8 h-px" style="background: rgba(255,255,255,0.2)" />
        <p class="text-[13px] font-medium uppercase tracking-[0.2em]" style="color: rgba(255,255,255,0.5)">
          {{ t('hero.tag') }}
        </p>
        <div class="w-8 h-px" style="background: rgba(255,255,255,0.2)" />
      </div>

      <!-- Headline -->
      <h1 class="animate-in-delay-1 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]" style="opacity: 0; color: white">
        <span>{{ t('hero.line1') }}</span>
        <br />
        <template v-if="locale === 'en'">
          <span style="color: #a0c4ff; text-shadow: 0 0 30px rgba(160,196,255,0.6), 0 0 60px rgba(160,196,255,0.3)">X</span><span>-fold your Impact.</span>
        </template>
        <template v-else>
          <span>Ma</span><span style="color: #a0c4ff; text-shadow: 0 0 30px rgba(160,196,255,0.6), 0 0 60px rgba(160,196,255,0.3)">x</span><span>imale Wirkung.</span>
        </template>
      </h1>

      <!-- Sub -->
      <p class="animate-in-delay-2 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style="color: rgba(255,255,255,0.5); opacity: 0">
        {{ t('hero.subtitle') }}
      </p>

      <!-- CTAs -->
      <div class="animate-in-delay-3 mt-12 flex flex-wrap items-center justify-center gap-4" style="opacity: 0">
        <a
          href="#contact"
          class="group inline-flex items-center justify-center font-medium rounded-full px-8 py-3.5 text-[15px] transition-all duration-300"
          style="background: white; color: #0A1F44"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'"
        >
          {{ t('nav.cta') }}
          <svg class="ml-2 w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
        <a
          href="#services"
          class="inline-flex items-center justify-center font-medium rounded-full px-8 py-3.5 text-[15px] transition-all duration-300"
          style="color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.15)"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; ($event.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; ($event.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'"
        >
          {{ t('hero.learn_more') }}
        </a>
      </div>

      <!-- Trust badges -->
      <div class="animate-in-delay-3 mt-16 flex items-center justify-center gap-6 flex-wrap" style="opacity: 0">
        <div class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5" style="color: rgba(160,196,255,0.6)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span class="text-[11px] font-medium uppercase tracking-[0.1em]" style="color: rgba(255,255,255,0.3)">{{ t('hero.trust1') }}</span>
        </div>
        <div class="w-px h-3" style="background: rgba(255,255,255,0.1)" />
        <div class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5" style="color: rgba(160,196,255,0.6)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <span class="text-[11px] font-medium uppercase tracking-[0.1em]" style="color: rgba(255,255,255,0.3)">{{ t('hero.trust2') }}</span>
        </div>
        <div class="w-px h-3" style="background: rgba(255,255,255,0.1)" />
        <div class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5" style="color: rgba(160,196,255,0.6)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span class="text-[11px] font-medium uppercase tracking-[0.1em]" style="color: rgba(255,255,255,0.3)">{{ t('hero.trust3') }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 animate-in-delay-3" style="opacity: 0">
      <div class="w-5 h-8 rounded-full flex justify-center pt-1.5" style="border: 1px solid rgba(255,255,255,0.15)">
        <div class="w-0.5 h-2 rounded-full animate-bounce" style="background: rgba(255,255,255,0.3)" />
      </div>
    </div>

    <!-- No gradient fade - clean edge -->
  </section>
</template>
