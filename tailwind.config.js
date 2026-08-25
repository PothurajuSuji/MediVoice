/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // emerald green healthcare primary
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        mediblue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          coral: '#f43f5e',
          amber: '#f59e0b',
          indigo: '#6366f1',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'sans-serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))' },
          '50%': { transform: 'scale(1.08)', opacity: '1', filter: 'drop-shadow(0 0 35px rgba(16, 185, 129, 0.9))' },
        },
        'ripple': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'wave-bar': {
          '0%, 100%': { height: '8px' },
          '50%': { height: '36px' }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s infinite ease-in-out',
        'ripple': 'ripple 2s infinite cubic-bezier(0, 0.2, 0.8, 1)',
        'float': 'float 4s ease-in-out infinite',
        'wave-1': 'wave-bar 1.2s infinite ease-in-out',
        'wave-2': 'wave-bar 0.9s infinite ease-in-out 0.2s',
        'wave-3': 'wave-bar 1.5s infinite ease-in-out 0.4s',
        'wave-4': 'wave-bar 1.1s infinite ease-in-out 0.1s',
        'wave-5': 'wave-bar 1.3s infinite ease-in-out 0.3s',
      }
    },
  },
  plugins: [],
}
