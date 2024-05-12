/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
    fontFamily:{
      display: ["Hind Siliguri","sans-serif"],
       Font:[ "Poppins"," sans-serif"],
       Gfont:["Source Sans 3", "sans-serif"],
    }
  },
  plugins: [
    //eslint-disable-next-line func-names
    plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
],
}

