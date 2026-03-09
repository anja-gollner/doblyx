<script setup lang="ts">
const { t } = useI18n()

const email = ref('')
const message = ref('')
const name = ref('')
const company = ref('')
const phone = ref('')
const submitted = ref(false)
const sending = ref(false)
const error = ref(false)

async function handleSubmit() {
  sending.value = true
  error.value = false
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
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden" style="background: #050D1A">
    <!-- Ambient glows (matching hero) -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full" style="opacity: 0.2; background: radial-gradient(ellipse, #0A2A5C 0%, transparent 65%)" />
    <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full" style="opacity: 0.1; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />
    <div class="absolute top-0 left-0 w-[500px] h-[400px] rounded-full" style="opacity: 0.08; background: radial-gradient(ellipse, #1E3A6E 0%, transparent 70%)" />

    <!-- Subtle grid overlay (matching hero) -->
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 80px 80px" />

    <!-- Top fade from previous section -->
    <div class="h-16" style="background: linear-gradient(to bottom, #0A1F44, #050D1A)" />

    <div class="relative z-10 px-6 pb-32 pt-16">
      <!-- Centered header -->
      <div
        class="max-w-2xl mx-auto text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <!-- Label pill -->
        <div class="flex items-center justify-center mb-8">
          <div
            class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)"
          >
            <span class="text-[12px] font-medium uppercase tracking-[0.15em]" style="color: rgba(255,255,255,0.4)">
              {{ t('contact.label') }}
            </span>
          </div>
        </div>

        <h2 class="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em]" style="color: white">
          {{ t('contact.title') }}
        </h2>
        <p class="mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style="color: rgba(255,255,255,0.4)">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <!-- Left: Contact info -->
          <div
            class="lg:col-span-2"
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
          >
            <div class="space-y-5">
              <!-- Email -->
              <div class="flex items-center gap-4 p-4 rounded-xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06)">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(255,255,255,0.06)">
                  <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] font-medium uppercase tracking-wider mb-0.5" style="color: rgba(255,255,255,0.3)">{{ t('contact.email_label') }}</p>
                  <span class="text-sm font-medium" style="color: rgba(255,255,255,0.7)">{{ t('contact.email_address') }}</span>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-4 p-4 rounded-xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06)">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(255,255,255,0.06)">
                  <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] font-medium uppercase tracking-wider mb-0.5" style="color: rgba(255,255,255,0.3)">{{ t('contact.phone_label') }}</p>
                  <span class="text-sm font-medium" style="color: rgba(255,255,255,0.7)">{{ t('contact.phone_number') }}</span>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-4 p-4 rounded-xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06)">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(255,255,255,0.06)">
                  <svg class="w-4 h-4" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] font-medium uppercase tracking-wider mb-0.5" style="color: rgba(255,255,255,0.3)">{{ t('contact.location').includes('Österreich') || t('contact.location').includes('Austria') ? 'Location' : 'Standort' }}</p>
                  <span class="text-sm font-medium" style="color: rgba(255,255,255,0.7)">{{ t('contact.location') }}</span>
                </div>
              </div>
            </div>

            <!-- Trust badges -->
            <div class="mt-8 flex items-center gap-5 flex-wrap">
              <div class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span class="text-[11px] font-medium" style="color: rgba(255,255,255,0.3)">{{ t('hero.trust1') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5" style="color: rgba(160,196,255,0.5)" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span class="text-[11px] font-medium" style="color: rgba(255,255,255,0.3)">{{ t('hero.trust2') }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div
            class="lg:col-span-3"
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
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
              <p v-if="error" class="text-sm font-medium" style="color: #F87171">
                {{ t('contact.error_message') }}
              </p>
              <button
                type="submit"
                :disabled="sending"
                class="group w-full py-4 text-sm font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                style="background: white; color: #0A1F44"
                @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'"
                @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = 'none'; ($event.currentTarget as HTMLElement).style.transform = 'translateY(0)'"
              >
                <template v-if="!sending">
                  {{ t('contact.submit') }}
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
    </div>
  </section>
</template>
