<script setup lang="ts">
const { t } = useI18n()

const email = ref('')
const message = ref('')
const name = ref('')
const company = ref('')
const phone = ref('')
const submitted = ref(false)
const sending = ref(false)

async function handleSubmit() {
  sending.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        company: company.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      },
    })
    submitted.value = true
  } catch {
    submitted.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden" style="background: #0A1F44; padding: 8rem 1.5rem">
    <!-- Subtle grid bg -->
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 80px 80px" />

    <!-- Ambient glow -->
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full" style="opacity: 0.15; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 65%)" />

    <!-- Secondary glow -->
    <div class="absolute bottom-0 left-0 -translate-x-1/3 w-[400px] h-[400px] rounded-full" style="opacity: 0.1; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
        <!-- Left -->
        <div
          class="lg:col-span-2"
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <p class="text-[13px] font-medium uppercase tracking-[0.15em] mb-4" style="color: rgba(255,255,255,0.4)">
            {{ t('contact.label') }}
          </p>
          <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]" style="color: white">
            {{ t('contact.title') }}
          </h2>
          <p class="mt-6 leading-relaxed text-base" style="color: rgba(255,255,255,0.4)">
            {{ t('contact.subtitle') }}
          </p>

          <div class="mt-14 space-y-5">
            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(255,255,255,0.06)">
                <svg class="w-4 h-4" style="color: rgba(255,255,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span class="text-sm" style="color: rgba(255,255,255,0.6)">{{ t('contact.email_address') }}</span>
            </div>
            <!-- Phone -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(255,255,255,0.06)">
                <svg class="w-4 h-4" style="color: rgba(255,255,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span class="text-sm" style="color: rgba(255,255,255,0.6)">{{ t('contact.phone_number') }}</span>
            </div>
            <!-- Location -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(255,255,255,0.06)">
                <svg class="w-4 h-4" style="color: rgba(255,255,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span class="text-sm" style="color: rgba(255,255,255,0.6)">{{ t('contact.location') }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div
          class="lg:col-span-3"
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
        >
          <form
            v-if="!submitted"
            class="rounded-2xl p-8 lg:p-10 space-y-6"
            style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06)"
            @submit.prevent="handleSubmit"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-[11px] uppercase tracking-widest mb-2.5 font-medium" style="color: rgba(255,255,255,0.3)">{{ t('contact.name_label') }}</label>
                <input
                  v-model="name"
                  type="text"
                  required
                  :placeholder="t('contact.name_placeholder')"
                  class="input-dark w-full rounded-xl px-4 py-3.5 text-sm"
                  style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: white"
                />
              </div>
              <div>
                <label class="block text-[11px] uppercase tracking-widest mb-2.5 font-medium" style="color: rgba(255,255,255,0.3)">{{ t('contact.company_label') }}</label>
                <input
                  v-model="company"
                  type="text"
                  :placeholder="t('contact.company_placeholder')"
                  class="input-dark w-full rounded-xl px-4 py-3.5 text-sm"
                  style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: white"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-[11px] uppercase tracking-widest mb-2.5 font-medium" style="color: rgba(255,255,255,0.3)">{{ t('contact.email_label') }}</label>
                <input
                  v-model="email"
                  type="email"
                  required
                  :placeholder="t('contact.email_placeholder')"
                  class="input-dark w-full rounded-xl px-4 py-3.5 text-sm"
                  style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: white"
                />
              </div>
              <div>
                <label class="block text-[11px] uppercase tracking-widest mb-2.5 font-medium" style="color: rgba(255,255,255,0.3)">{{ t('contact.phone_label') }}</label>
                <input
                  v-model="phone"
                  type="tel"
                  :placeholder="t('contact.phone_placeholder')"
                  class="input-dark w-full rounded-xl px-4 py-3.5 text-sm"
                  style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: white"
                />
              </div>
            </div>
            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-2.5 font-medium" style="color: rgba(255,255,255,0.3)">{{ t('contact.message_label') }}</label>
              <textarea
                v-model="message"
                rows="4"
                required
                :placeholder="t('contact.message_placeholder')"
                class="input-dark w-full rounded-xl px-4 py-3.5 text-sm resize-none"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: white"
              />
            </div>
            <button
              type="submit"
              :disabled="sending"
              class="group w-full py-4 text-sm font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center"
              style="background: white; color: #0A1F44"
              @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'"
              @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'"
            >
              <template v-if="!sending">
                {{ t('contact.submit') }}
                <svg class="ml-2 w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </template>
              <template v-else>
                <svg class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              </template>
            </button>
          </form>

          <div
            v-else
            class="rounded-2xl p-12 lg:p-16 text-center"
            style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06)"
          >
            <div class="w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center" style="background: rgba(255,255,255,0.08)">
              <svg class="w-7 h-7" style="color: white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2" style="color: white">{{ t('contact.success_title') }}</h3>
            <p class="text-sm" style="color: rgba(255,255,255,0.45)">{{ t('contact.success_message') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
