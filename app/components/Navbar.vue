<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

// Etappe 2 ergänzt: Branchen (Dropdown) und Über uns
const links = [
  { to: '/ai-ready-check', label: 'AI Ready Check' },
  { to: '/ablauf', label: 'Ablauf' },
]

function closeMenu() {
  // Sperre sofort lösen, sonst ignoriert die Scroll-Engine das Ziel
  mobileOpen.value = false
  useScrollLock(false)
}

// CTA: auf /ai-ready-check direkt zum Formular scrollen
function onCta(event: MouseEvent) {
  closeMenu()
  if (route.path.replace(/\/$/, '') === '/ai-ready-check') {
    event.preventDefault()
    useScrollTo('anfrage')
  }
}

// Logo: auf der Startseite sanft zum Hero zurück, sonst zur Startseite
function onLogoClick(event: MouseEvent) {
  mobileOpen.value = false
  useScrollLock(false)
  if (route.path === '/') {
    event.preventDefault()
    useScrollToTop()
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') mobileOpen.value = false
}

watch(mobileOpen, (open) => useScrollLock(open))
watch(() => route.fullPath, () => { mobileOpen.value = false })

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  useScrollLock(false)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500" :class="scrolled ? 'py-3' : 'py-5'">
    <div class="container-site !z-[2]">
      <nav
        class="relative z-[2] flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5"
        :class="mobileOpen ? 'border-transparent bg-transparent' : scrolled ? 'border-[var(--line)] bg-ink/75 backdrop-blur-xl' : 'border-transparent bg-transparent'"
        aria-label="Hauptnavigation"
      >
        <NuxtLink to="/" class="flex items-center text-fg" aria-label="Doblyx AI, zum Seitenanfang" @click="onLogoClick">
          <Logo class="h-5 w-auto sm:h-7" />
        </NuxtLink>

        <ul class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 font-mono lg:flex">
          <li v-for="(link, i) in links" :key="link.to" class="flex items-center gap-2">
            <span v-if="i === 0" class="h-1 w-1 rounded-full bg-cantaloupe" aria-hidden="true" />
            <RollingLink :to="link.to" :label="link.label" class-name="text-[12px] text-fg/85" />
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <div class="hidden items-center gap-1 rounded-full border border-white/20 p-1 pl-4 font-mono sm:flex" :class="{ 'sm:!hidden': mobileOpen }">
            <a :href="site.phoneHref" class="pr-2 text-[12px] text-fg/85 transition-colors hover:text-white">Anrufen</a>
            <NuxtLink to="/ai-ready-check#anfrage" class="rounded-full bg-white px-4 py-1.5 text-[12px] text-ink transition-colors hover:bg-cantaloupe hover:text-white" @click="onCta">
              AI Ready Check anfragen
            </NuxtLink>
          </div>

          <!-- Handy: Primär-Button bleibt neben dem Menü sichtbar -->
          <NuxtLink v-if="!mobileOpen" to="/ai-ready-check#anfrage" class="whitespace-nowrap rounded-full bg-white px-3 py-2.5 font-mono text-[11px] text-ink sm:hidden" @click="onCta">
            AI Ready Check
          </NuxtLink>

          <!-- Menü-Button: zwei Linien, die sich zum X drehen -->
          <button
            class="burger relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md lg:hidden"
            :class="{ 'is-open': mobileOpen }"
            :aria-expanded="mobileOpen"
            :aria-controls="mobileOpen ? 'mobile-menu' : undefined"
            :aria-label="mobileOpen ? 'Menü schließen' : 'Menü öffnen'"
            @click="mobileOpen = !mobileOpen"
          >
            <span class="burger-line" />
            <span class="burger-line" />
          </button>
        </div>
      </nav>
    </div>

    <!-- Vollbild-Menü fürs Handy -->
    <Transition name="menu">
      <div v-if="mobileOpen" id="mobile-menu" class="menu fixed inset-0 z-[1] flex flex-col overflow-y-auto bg-ink/95 backdrop-blur-2xl lg:hidden">
        <div class="menu-aurora" aria-hidden="true" />

        <nav class="container-site flex flex-1 flex-col pb-8 pt-28" aria-label="Menü">
          <p class="menu-item eyebrow" style="--i: 0">Menü</p>
          <ul class="mt-6">
            <li v-for="(link, i) in links" :key="link.to" class="menu-item border-b border-white/[0.08]" :style="{ '--i': i + 1 }">
              <NuxtLink :to="link.to" class="group flex items-baseline justify-between py-4" @click="closeMenu">
                <span class="font-serif text-[2.4rem] leading-none text-fg transition-colors group-active:text-cantaloupe">{{ link.label }}</span>
                <span class="font-mono text-[11px] text-muted">0{{ i + 1 }}</span>
              </NuxtLink>
            </li>
          </ul>

          <div class="mt-auto pt-10">
            <NuxtLink to="/ai-ready-check#anfrage" class="menu-item btn-primary w-full" style="--i: 7" @click="onCta">
              AI Ready Check anfragen <span class="arrow" aria-hidden="true">→</span>
            </NuxtLink>
            <div class="menu-item mt-6 grid grid-cols-2 gap-3 font-mono text-[11px]" style="--i: 8">
              <a :href="site.phoneHref" class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span class="block uppercase tracking-[0.18em] text-muted">Anrufen</span>
                <span class="mt-1.5 block text-fg">{{ site.phone }}</span>
              </a>
              <a :href="`mailto:${site.email}`" class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span class="block uppercase tracking-[0.18em] text-muted">E-Mail</span>
                <span class="mt-1.5 block truncate text-fg">{{ site.email }}</span>
              </a>
            </div>
            <p class="menu-item mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted" style="--i: 9">
              <span class="live-dot" /> Wert {{ site.readyCheckValue }}, für Energiebetriebe aktuell ohne Kosten
            </p>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.burger-line {
  position: absolute;
  height: 1.5px;
  width: 16px;
  border-radius: 2px;
  background: #fff;
  transition: transform 0.5s var(--ease);
}

.burger-line:first-child { transform: translateY(-3.5px); }
.burger-line:last-child { transform: translateY(3.5px); }
.burger.is-open .burger-line:first-child { transform: rotate(45deg); }
.burger.is-open .burger-line:last-child { transform: rotate(-45deg); }

/* Hero-Licht als Echo am unteren Rand des Menüs */
.menu-aurora {
  pointer-events: none;
  position: absolute;
  inset: auto 0 0;
  height: 55%;
  background:
    radial-gradient(60% 55% at 50% 100%, rgba(252, 115, 77, 0.45), transparent 70%),
    radial-gradient(90% 80% at 50% 100%, rgba(2, 151, 222, 0.35), transparent 75%);
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 2px, rgba(0, 0, 0, 0.55) 2px 9px);
  mask-image: repeating-linear-gradient(90deg, #000 0 2px, rgba(0, 0, 0, 0.55) 2px 9px);
}

/* Einblenden: Hintergrund blendet, Einträge kommen gestaffelt von unten */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.45s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active .menu-item {
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
  transition-delay: calc(var(--i, 0) * 50ms + 80ms);
}

.menu-enter-from .menu-item {
  opacity: 0;
  transform: translateY(24px);
}

@media (prefers-reduced-motion: reduce) {
  .menu-enter-active .menu-item { transition: none; }
}
</style>
