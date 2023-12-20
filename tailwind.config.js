/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-White':"url('/src/img/Bacground-white.svg')"
      }
    },
  },
  plugins: [],
}