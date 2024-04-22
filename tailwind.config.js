/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-9': '#30A46C',
        'green-8': '#2F7C57'
      }
    },
  },
  plugins: [],
}

