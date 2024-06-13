const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
        'mono': ['"DM Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

