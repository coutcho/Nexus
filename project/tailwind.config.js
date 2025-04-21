/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif']
      },
      colors: {
        purple: {
          500: '#B026FF',
        },
        cyan: {
          500: '#00FFFF',
        },
        red: {
          500: '#FF2A6D',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};