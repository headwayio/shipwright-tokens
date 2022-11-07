/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const colors = require("./colors.json");
const boxShadow = require("./shadows.json");
const typography = require("./typography.json");
const misc = require("./misc.json");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors,
      boxShadow,
      ...misc,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addComponents({
        ...typography,
      });
    }),
  ],
  mode: "jit",
};