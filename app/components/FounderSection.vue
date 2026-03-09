<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-24 px-6" style="background: #FAFAFA">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        <!-- Image -->
        <div class="flex-shrink-0">
          <div
            class="w-52 h-64 md:w-60 md:h-72 overflow-hidden"
            style="box-shadow: 0 20px 60px rgba(10,31,68,0.1)"
          >
            <img
              src="/founder.png"
              alt="Eric Dobler — Founder & CEO, Doblyx AI"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Text -->
        <div class="text-center md:text-left flex-1">
          <p class="text-[12px] font-medium uppercase tracking-[0.15em] mb-3" style="color: #0A1F44">
            {{ t('founder.label') }}
          </p>
          <h3 class="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4" style="color: #0F1419">
            {{ t('founder.title') }}
          </h3>
          <p class="text-[14px] leading-relaxed mb-5" style="color: #777">
            {{ t('founder.text1') }}
          </p>

          <div class="flex items-center gap-6 justify-center md:justify-start flex-wrap">
            <!-- Stats inline -->
            <div class="flex items-center gap-1.5">
              <span class="text-lg font-extrabold" style="color: #0F1419">50+</span>
              <span class="text-[11px] font-medium" style="color: #999">{{ t('founder.stat1') }}</span>
            </div>
            <div class="w-px h-4" style="background: #E0E0E0" />
            <div class="flex items-center gap-1.5">
              <span class="text-lg font-extrabold" style="color: #0F1419">10+</span>
              <span class="text-[11px] font-medium" style="color: #999">{{ t('founder.stat2') }}</span>
            </div>
            <div class="w-px h-4" style="background: #E0E0E0" />
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/eric-dobler/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors duration-300"
              style="color: #0A1F44"
              @mouseenter="($event.currentTarget as HTMLElement).style.color = '#1E3A6E'"
              @mouseleave="($event.currentTarget as HTMLElement).style.color = '#0A1F44'"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {{ t('founder.linkedin') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
