/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  presets: [
    require('./styles/tailwind.config.js')
  ],
  plugins: [],
}
