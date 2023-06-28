/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },

      colors: {
        digitux: {
          primary: '#3B71FE',
          text: '#0E0E2C',
          grey: '#A0A4AB',
          greySoft: '#B1B1B1',
          dark: '#040404',
          light: '#F7F7F7',
          pblue: '#3b5fe2',
          pblack: '#1b1e27',
        },
        dark: '#040404',
        pblue: '#3b5fe2',
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
