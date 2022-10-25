/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const colors = require("./styles/tailwind/colors.json");
const boxShadow = require("./styles/tailwind/shadows.json");
const typography = require("./styles/tailwind/typography.json");
const misc = require("./styles/tailwind/misc.json");

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
