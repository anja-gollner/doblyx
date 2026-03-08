<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="pt-20 pb-12 px-6" style="background: #0F1419">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <!-- Brand -->
        <div class="md:col-span-4">
          <NuxtLink :to="localePath('/')" class="inline-block mb-5">
            <img src="/logos/logo-final-dark.svg" alt="Doblyx AI" class="h-7" />
          </NuxtLink>
          <p class="text-[14px] leading-relaxed max-w-xs" style="color: #555">
            {{ t('footer.description') }}
          </p>
        </div>

        <!-- Services -->
        <div class="md:col-span-3 md:col-start-6">
          <h4 class="text-[11px] font-semibold uppercase tracking-widest mb-5" style="color: #777">{{ t('footer.services_title') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/') + '#services'" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('features.strategy.title') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/') + '#services'" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('features.automation.title') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/') + '#services'" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('features.development.title') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="md:col-span-2">
          <h4 class="text-[11px] font-semibold uppercase tracking-widest mb-5" style="color: #777">{{ t('footer.company_title') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/impressum')" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('footer.imprint') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/datenschutz')" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('footer.privacy') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/agb')" class="text-[13px] transition-colors duration-300" style="color: #555" @mouseenter="($event.target as HTMLElement).style.color='#999'" @mouseleave="($event.target as HTMLElement).style.color='#555'">{{ t('footer.terms') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="md:col-span-1 flex md:justify-end items-start">
          <a
            href="https://www.linkedin.com/in/eric-dobler/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style="background: rgba(255,255,255,0.04); color: #555"
            aria-label="LinkedIn"
            @mouseenter="($event.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.08)'; ($event.currentTarget as HTMLElement).style.color='#999'"
            @mouseleave="($event.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.04)'; ($event.currentTarget as HTMLElement).style.color='#555'"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 space-y-3" style="border-top: 1px solid rgba(255,255,255,0.05)">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-[11px]" style="color: #444">&copy; {{ year }} {{ t('footer.copyright') }}</p>
          <p class="text-[11px] font-medium" style="color: #444">{{ t('footer.tagline') }}</p>
        </div>
        <p class="text-[10px] text-center sm:text-left" style="color: #333">
          {{ t('footer.registration') }}
        </p>
      </div>
    </div>
  </footer>
</template>
