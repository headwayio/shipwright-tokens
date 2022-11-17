import plugin from "tailwindcss/plugin";
import colors from "./colors";
import shadows from "./shadows";
import typography from "./typography";
import misc from "./misc";

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
    plugin(function ({ addComponents }) {
      addComponents({
        ...typography,
      });
    }),
  ],
  mode: "jit",
};
