<script setup lang="ts">
import type { FaqItem } from '~/utils/faq'

const props = defineProps<{ items: FaqItem[] }>()
const open = ref<number | null>(0)

// FAQPage-Schema aus denselben Daten wie die sichtbare Liste
useHead({
  script: [{
    key: 'faq-schema',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: props.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }),
  }],
})

// Antwort in Text vor und nach dem optionalen Link teilen
function parts(item: FaqItem) {
  if (!item.link) return null
  const [before, ...rest] = item.a.split(item.link.text)
  return { before, after: rest.join(item.link.text) }
}

function toggle(i: number) {
  open.value = open.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="relative bg-ink-800 py-20 sm:py-28 lg:py-36">
    <HorizonGlow tone="blue" />
    <div class="container-site grid gap-14 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <p class="reveal eyebrow">Häufige Fragen</p>
        <h2 class="reveal heading mt-6">
          Gute Fragen. <span class="accent">Ehrliche Antworten.</span>
        </h2>
        <p class="reveal mt-6 max-w-sm text-[15px] leading-7 text-muted">
          Ihre Frage ist nicht dabei? Rufen Sie uns an unter
          <a :href="site.phoneHref" class="whitespace-nowrap text-fg underline decoration-cantaloupe/60 underline-offset-4">{{ site.phone }}</a>.
        </p>
      </div>

      <ul class="lg:col-span-8">
        <li v-for="(item, i) in props.items" :key="item.q" class="reveal border-t border-[var(--line)] last:border-b">
          <h3>
            <button
              :id="`faq-q-${i}`"
              class="flex w-full items-center justify-between gap-6 py-6 text-left"
              :aria-expanded="open === i"
              :aria-controls="`faq-a-${i}`"
              @click="toggle(i)"
            >
              <span class="font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-fg">{{ item.q }}</span>
              <span
                class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-fg transition-all duration-500"
                :class="open === i ? 'rotate-45 border-cantaloupe text-cantaloupe' : ''"
                aria-hidden="true"
              >+</span>
            </button>
          </h3>
          <div
            :id="`faq-a-${i}`"
            role="region"
            :aria-labelledby="`faq-q-${i}`"
            class="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
            :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p v-if="parts(item)" class="max-w-2xl pb-7 text-[15px] leading-7 text-muted">
                {{ parts(item)!.before }}<NuxtLink :to="item.link!.to" class="text-fg underline decoration-cantaloupe/60 underline-offset-4">{{ item.link!.text }}</NuxtLink>{{ parts(item)!.after }}
              </p>
              <p v-else class="max-w-2xl pb-7 text-[15px] leading-7 text-muted">{{ item.a }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
