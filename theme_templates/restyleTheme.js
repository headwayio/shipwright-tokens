import { createTheme } from "@shopify/restyle";

const palette = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

const theme = createTheme({
  colors: {
    // Extend this as needed in your own theme
    mainBackground: palette.background.white.primary,
    mainForeground: palette.type.black.primary,
    cardBackground: palette.background.white.secondary,
    cardForeground: palette.type.black.secondary,
  },
  spacing: {
    // Extend this as needed in your own theme
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  breakpoints: {
    // Extend this as needed in your own theme
    phone: 0,
    tablet: 600,
    web: 905,
    laptop: 1240,
    desktop: 1440,
  },
  shadows: {
    // Pull from this in your own theme as needed
    ...shadows,
  },
  misc: {
    // Pull from this in your own theme as needed
    ...misc,
  },
  textVariants: {
    ...typography,
    // defaults: {
    //   // same as body
    //   fontFamily: style_dictionary.fontFamiliesInter,
    //   fontSize: {
    //     phone: style_dictionary.fontSize5,
    //     tablet: style_dictionary.fontSize5,
    //   },
    //   lineHeight: style_dictionary.lineHeights5,
    // },
  },
});

export type Theme = typeof theme;
export default theme;
