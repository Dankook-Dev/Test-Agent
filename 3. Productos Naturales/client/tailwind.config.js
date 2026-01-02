/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f2f9f1',
          100: '#e1f1df',
          200: '#c5e3c1',
          300: '#9ccf96',
          400: '#6eb166',
          500: '#4b9444',
          600: '#3a7834',
          700: '#2f5f2b',
          800: '#284c25',
          900: '#223f20',
        },
      }
    },
  },
  plugins: [],
}
