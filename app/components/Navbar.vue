<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()

const scrolled = ref(false)
const mobileOpen = ref(false)

async function switchLocale(code: string) {
  const scrollY = window.scrollY
  await setLocale(code)
  await nextTick()
  window.scrollTo({ top: scrollY, behavior: 'instant' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 transition-all duration-700"
    :style="scrolled
      ? 'padding: 0.65rem 0; background: rgba(250,250,250,0.9); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-bottom: 1px solid rgba(0,0,0,0.06)'
      : 'padding: 1.5rem 0; background: transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <img src="/logos/logo-final-white.svg" alt="Doblyx AI" class="h-7" />
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-10">
        <a href="#services" class="text-[13px] font-medium transition-colors duration-300" style="color: #999" @mouseenter="($event.target as HTMLElement).style.color='#0F1419'" @mouseleave="($event.target as HTMLElement).style.color='#999'">{{ t('nav.services') }}</a>
        <a href="#process" class="text-[13px] font-medium transition-colors duration-300" style="color: #999" @mouseenter="($event.target as HTMLElement).style.color='#0F1419'" @mouseleave="($event.target as HTMLElement).style.color='#999'">{{ t('nav.process') }}</a>
        <a href="#contact" class="text-[13px] font-medium transition-colors duration-300" style="color: #999" @mouseenter="($event.target as HTMLElement).style.color='#0F1419'" @mouseleave="($event.target as HTMLElement).style.color='#999'">{{ t('nav.contact') }}</a>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-4">
        <!-- Fixed-width language switcher so button doesn't shift -->
        <div class="flex items-center rounded-full p-0.5" style="background: rgba(0,0,0,0.04); width: 88px">
          <button
            v-for="loc in locales"
            :key="loc.code"
            class="flex-1 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 text-center"
            :style="locale === loc.code
              ? 'background: #0A1F44; color: white; box-shadow: 0 2px 8px rgba(10,31,68,0.25)'
              : 'color: #888'"
            @click="switchLocale(loc.code)"
          >
            {{ loc.code }}
          </button>
        </div>

        <a
          href="#contact"
          class="hidden sm:inline-flex items-center justify-center font-medium rounded-full text-[13px] transition-all duration-300"
          style="background: #0A1F44; color: white; padding: 0.625rem 1.5rem; min-width: 160px; text-align: center"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(10,31,68,0.3)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'"
        >
          {{ t('nav.cta') }}
        </a>

        <button class="md:hidden" style="color: #555" @click="mobileOpen = !mobileOpen">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="md:hidden mx-4 mt-3 rounded-2xl p-6 space-y-4" style="background: white; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 40px rgba(0,0,0,0.08)">
        <a href="#services" class="block text-sm font-medium" style="color: #555" @click="mobileOpen = false">{{ t('nav.services') }}</a>
        <a href="#process" class="block text-sm font-medium" style="color: #555" @click="mobileOpen = false">{{ t('nav.process') }}</a>
        <a href="#contact" class="block text-sm font-medium" style="color: #555" @click="mobileOpen = false">{{ t('nav.contact') }}</a>
        <div style="height: 1px; background: #F0F0F0" />
        <a href="#contact" class="block btn-primary text-center py-3 text-sm rounded-xl" @click="mobileOpen = false">{{ t('nav.cta') }}</a>
      </div>
    </Transition>
  </nav>
</template>
