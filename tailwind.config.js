/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        atBlue: '#0219A6',
        atRed: '#e4152a',
        atLgray: '#f9f9f9',
        atLgray2: '#EDEDED',
        atLgray3: '#BBBBBB',
        atDgray: '#8C8C8C',
        atDgray2: '#585858',
        atDgray3: '#808080',
      },

      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },
    },
    screens: {
      'xxxxl': { 'max': '1880px' },
      // => @media (max-width: 1880px) { ... }

      'xxxl': { 'max': '1799px' },
      // => @media (max-width: 1799px) { ... }

      'xxl': { 'max': '1599px' },
      // => @media (max-width: 1599px) { ... }

      'xl': { 'max': '1399px' },
      // => @media (max-width: 1399px) { ... }

      'lg': { 'max': '1199px' },
      // => @media (max-width: 1199px) { ... }

      'md': { 'max': '991px' },
      // => @media (max-width: 991px) { ... }

      'sm': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'xs': { 'max': '575px' },
      // => @media (max-width: 575px) { ... }

      'xxs': { 'max': '479px' },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

