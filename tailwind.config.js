/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1F44',
          50: '#E8EDF5',
          100: '#C5D0E6',
          200: '#8BA1CD',
          300: '#5172B4',
          400: '#1D3F7A',
          500: '#0A1F44',
          600: '#081937',
          700: '#06132A',
          800: '#040D1D',
          900: '#020710',
        },
        surface: {
          DEFAULT: '#050505',
          50: '#1A1A1A',
          100: '#141414',
          200: '#0F0F0F',
          300: '#0A0A0A',
          400: '#050505',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'in': 'slideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'in-delay-1': 'slideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s forwards',
        'in-delay-2': 'slideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s forwards',
        'in-delay-3': 'slideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s forwards',
        'gradient': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
