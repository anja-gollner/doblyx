export function useScrollReveal(selector = '.reveal') {
  if (!import.meta.client) return

  const run = async () => {
    // Nur Elemente, die noch nicht beobachtet werden (wichtig nach Seitenwechsel)
    const elements = Array.from(document.querySelectorAll<HTMLElement>(`${selector}:not([data-reveal])`))
    if (!elements.length) return
    elements.forEach((el) => { el.dataset.reveal = '' })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.batch(elements, {
      start: 'top 97%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          // Endzustand inline lassen, sonst greift wieder die Start-Unschärfe aus dem CSS
          onComplete: () => batch.forEach((el) => { (el as HTMLElement).style.filter = 'none' }),
        })
      },
    })
    ScrollTrigger.refresh()
  }

  onMounted(run)
  useNuxtApp().hook('page:finish', () => nextTick(run))
}
