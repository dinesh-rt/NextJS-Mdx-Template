/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#181818',
          800: '#202020',
          700: '#2b2b2b',
          400: '#8b8b8b',
          300: '#a6a6a6',
          200: '#d3d3d3',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
} 