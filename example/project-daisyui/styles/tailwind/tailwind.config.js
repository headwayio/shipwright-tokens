const plugin = require("tailwindcss/plugin");

const colors = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors,
      shadows,
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
