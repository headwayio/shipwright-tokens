/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./components/**/*.{html, js}"],
  presets: [
    require('./assets/styles/tailwind.config.js')
  ],
}
