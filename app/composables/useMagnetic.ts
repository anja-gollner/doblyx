export function useMagnetic(target: MaybeRef<HTMLElement | null>) {
  if (!import.meta.client) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const prefersFine = window.matchMedia('(hover:hover) and (pointer:fine)').matches

  onMounted(() => {
    if (!prefersFine || prefersReduced) return
    const el = unref(target)
    if (!el) return

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18
      const y = (event.clientY - (rect.top + rect.height / 2)) * 0.2
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const reset = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)

    onBeforeUnmount(() => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    })
  })
}
