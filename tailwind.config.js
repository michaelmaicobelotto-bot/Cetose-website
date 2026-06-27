/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#34d399', // Emerald 400
          500: '#10b981', // Emerald 500
          600: '#059669', // Emerald 600
          700: '#047857', // Emerald 700
        },
        darkGray: {
          50: '#06110f', // Very dark green-tinted black
          100: '#0b1c19', // Slightly lighter
        }
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'draw': 'draw 0.4s ease-out forwards',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        draw: { 'to': { strokeDashoffset: '0' } }
      }
    }
  },
  plugins: [],
}
