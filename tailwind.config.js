/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'theme-bg': 'var(--bg-color)',
        'theme-sidebar': 'var(--sidebar-bg)',
      },
      textColor: {
        'theme-text': 'var(--text-color)',
        'theme-sidebar-text': 'var(--sidebar-text)',
      },
      colors: {
        emerald: {
          300: '#6ee7b7',
        },
        gray: {
          900: '#181818',
          800: '#202020',
          700: '#2b2b2b',
          400: '#8b8b8b',
          300: '#a6a6a6',
          200: '#d3d3d3',
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}