/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bela: "'Belanosima', sans-serif",
        pdisplay: "'Playfair Display', serif",
        lora: "'Lora', serif"
      },
      screens: {
        'tiny': '400px'
      }
    },
  },
  plugins: [],
}

