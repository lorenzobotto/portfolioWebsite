module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {}
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