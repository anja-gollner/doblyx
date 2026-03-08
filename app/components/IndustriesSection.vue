<script setup lang="ts">
const { t } = useI18n()

const industries = [
  {
    key: 'industries.energy',
    icon: 'sun',
  },
  {
    key: 'industries.realestate',
    icon: 'building',
  },
  {
    key: 'industries.industry',
    icon: 'cog',
  },
]
</script>

<template>
  <section class="py-32 px-6" style="background: white">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center max-w-2xl mx-auto mb-20"
      >
        <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: #0A1F44">
          {{ t('industries.label') }}
        </p>
        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]" style="color: #0F1419">
          {{ t('industries.title') }}
        </h2>
        <p class="mt-6 text-base leading-relaxed" style="color: #777">
          {{ t('industries.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(industry, i) in industries"
          :key="industry.key"
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 120, duration: 600 } }"
          class="group relative rounded-2xl p-10 transition-all duration-500 overflow-hidden"
          style="background: #FAFAFA; border: 1px solid #EBEBEB"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = '#D5D5D5'; ($event.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.06)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = '#EBEBEB'; ($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-8" style="background: #0A1F44">
            <!-- Sun icon for Energy -->
            <svg v-if="industry.icon === 'sun'" class="w-5 h-5" style="color: white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <!-- Building icon for Real Estate -->
            <svg v-if="industry.icon === 'building'" class="w-5 h-5" style="color: white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
            </svg>
            <!-- Cog icon for Industry -->
            <svg v-if="industry.icon === 'cog'" class="w-5 h-5" style="color: white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h3 class="text-xl font-bold mb-4 tracking-tight" style="color: #0F1419">
            {{ t(`${industry.key}.title`) }}
          </h3>
          <p class="text-[14px] leading-relaxed" style="color: #777">
            {{ t(`${industry.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
