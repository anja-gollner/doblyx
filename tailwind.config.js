/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Markenfarben: Midnight Black, Electric Blue, Cantaloupe Orange
        ink: {
          DEFAULT: '#02070A',
          900: '#02070A',
          800: '#060D12',
          700: '#0A141B',
          600: '#111D26',
        },
        electric: {
          DEFAULT: '#0297DE',
          soft: '#4FB8EC',
        },
        cantaloupe: {
          DEFAULT: '#FC734D',
          soft: '#FD9A7D',
        },
        fg: 'rgb(243 245 247 / <alpha-value>)',
        muted: '#8C969F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.25rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.6rem, 6vw, 5.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        site: '82rem',
      },
    },
  },
  plugins: [],
}
