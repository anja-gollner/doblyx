// Setzt die Mausposition als CSS-Variablen auf Glas-Karten (für den Lichtschein)
export function useSpotlight() {
  if (!import.meta.client) return

  const onMove = (event: PointerEvent) => {
    const card = (event.target as Element | null)?.closest?.('.glass-card') as HTMLElement | null
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  onMounted(() => window.addEventListener('pointermove', onMove, { passive: true }))
  onBeforeUnmount(() => window.removeEventListener('pointermove', onMove))
}
