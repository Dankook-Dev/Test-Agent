/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // Yellow for construction
        secondary: "#1f2937", // Dark gray
      }
    },
  },
  plugins: [],
}
