module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {},
      // that is animation class
      animation: {
        fade: 'fadeIn 0.3s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { display: theme('display.none') },
          '100%': { display: theme('display.flex') },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}