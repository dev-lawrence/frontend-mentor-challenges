/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      body: ['Figtree'],
    },

    fontWeight: {
      400: '400',
      600: '600',
      800: '800',
    },

    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        Grey: 'hsl(0, 0%, 50%)',
      },

      boxShadow: {
        '3xl': '10px 10px 0px 0px rgba(0,0,0,0.99)',
      },
    },
  },
  plugins: [],
};
