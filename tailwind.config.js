/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'covered-by-your-grace': ['Covered By Your Grace', 'cursive'],
        'switzer': ['Switzer', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}