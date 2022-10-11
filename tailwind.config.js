const colors = require("./build/tailwind/colors");
const typography = require("./build/tailwind/typography");
const boxShadow = require("./build/tailwind/shadows");
const misc = require("./build/tailwind/misc");

module.exports = {
  theme: {
    colors,
    boxShadow,
    typography,
    ...misc,
    extend: {},
  },
};
