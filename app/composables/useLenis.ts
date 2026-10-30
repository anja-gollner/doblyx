import type Lenis from '@studio-freight/lenis'

// Geteilte Instanz, damit useScrollTo die geglättete Scroll-Engine nutzen kann
const lenis = shallowRef<Lenis | null>(null)

export function useLenis() {
  if (import.meta.client) {
    onMounted(async () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('@studio-freight/lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      gsap.registerPlugin(ScrollTrigger)

      lenis.value = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      lenis.value.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => lenis.value?.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)
    })

    onBeforeUnmount(() => {
      lenis.value?.destroy()
      lenis.value = null
    })
  }

  return { lenis }
}

export function useScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) {
    navigateTo('/#' + id)
    return
  }
  if (lenis.value) lenis.value.scrollTo(el, { offset: -80 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export function useScrollToTop() {
  if (lenis.value) lenis.value.scrollTo(0, { duration: 1.4 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Scrollen sperren/freigeben (z. B. bei geöffnetem Handy-Menü)
export function useScrollLock(locked: boolean) {
  if (locked) lenis.value?.stop()
  else lenis.value?.start()
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}
