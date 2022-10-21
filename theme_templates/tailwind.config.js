const plugin = require("tailwindcss/plugin");

const colors = require("./colors");
const boxShadow = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
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
};
