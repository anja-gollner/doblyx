<script setup lang="ts">
const year = new Date().getFullYear()

const sections = [
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'anwendungen', label: 'Anwendungsfälle' },
  { id: 'gruendungskunden', label: 'Gründungskunden' },
  { id: 'faq', label: 'FAQ' },
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-[var(--line)] bg-ink">
    <!-- Abschluss-CTA -->
    <div class="container-site py-24 text-center sm:py-32">
      <p class="reveal eyebrow">Bereit?</p>
      <p class="reveal mx-auto mt-6 max-w-4xl font-serif text-display-lg text-fg">
        Weniger Routine. <span class="accent">Mehr Wachstum.</span>
      </p>
      <div class="reveal mt-10 flex justify-center">
        <a href="/#kontakt" class="btn-primary" @click.prevent="useScrollTo('kontakt')">
          Kostenloses Erstgespräch vereinbaren <span class="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="container-site">
      <div class="grid gap-12 border-t border-[var(--line)] py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <NuxtLink to="/" class="inline-block text-fg" aria-label="Doblyx AI, Startseite">
            <Logo class="h-7 w-auto" />
          </NuxtLink>
          <p class="mt-6 max-w-sm text-[14px] leading-7 text-muted">
            Doblyx AI GmbH: KI-Automatisierung für Unternehmen, die mehr schaffen wollen, ohne mehr Personal aufzubauen.
          </p>
        </div>

        <nav class="lg:col-span-2" aria-label="Seiten">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Website</p>
          <ul class="mt-5 space-y-3">
            <li v-for="s in sections" :key="s.id">
              <RollingLink :href="`/#${s.id}`" :label="s.label" class-name="text-[14px] text-fg/80" @click.prevent="useScrollTo(s.id)" />
            </li>
            <li><RollingLink to="/prozess" label="Ablauf im Detail" class-name="text-[14px] text-fg/80" /></li>
          </ul>
        </nav>

        <div class="lg:col-span-3">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Kontakt</p>
          <ul class="mt-5 space-y-3 text-[14px] text-fg/80">
            <li><a :href="site.phoneHref" class="transition-colors hover:text-cantaloupe">{{ site.phone }}</a></li>
            <li><a :href="`mailto:${site.email}`" class="transition-colors hover:text-cantaloupe">{{ site.email }}</a></li>
            <li><a :href="site.linkedin" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-cantaloupe">LinkedIn</a></li>
            <li class="text-muted">Schildbach 42, 8230 Hartberg</li>
          </ul>
        </div>

        <nav class="lg:col-span-2" aria-label="Rechtliches">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Rechtliches</p>
          <ul class="mt-5 space-y-3 text-[14px] text-fg/80">
            <li><NuxtLink to="/impressum" class="transition-colors hover:text-cantaloupe">Impressum</NuxtLink></li>
            <li><NuxtLink to="/datenschutz" class="transition-colors hover:text-cantaloupe">Datenschutz</NuxtLink></li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-col gap-2 border-t border-[var(--line)] py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:flex-row sm:justify-between">
        <p>© {{ year }} Doblyx AI GmbH</p>
        <p>FN 670873d · LG f. ZRS Graz · UID ATU82914937</p>
      </div>
    </div>

    <!-- Großer Markenschriftzug -->
    <div class="pointer-events-none select-none overflow-hidden px-4 pb-4" aria-hidden="true">
      <Logo class="mx-auto w-full max-w-site text-fg/[0.04]" />
    </div>
  </footer>
</template>
