/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gptlogo: '#10a37f',
        gptdarkgray: '#202123',
        gptgray: '#343541',
        gptlightgray: '#444654'
      }
    }
  },
  plugins: []
}
