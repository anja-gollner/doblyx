declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string | number | boolean>) => void }
  }
}

// Ereignis an Umami senden (macht nichts, solange Analytics nicht aktiv ist)
export function trackEvent(event: string, data?: Record<string, string | number | boolean>) {
  window.umami?.track(event, data)
}
