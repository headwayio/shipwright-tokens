import { createTheme } from "@shopify/restyle";

const palette = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

const theme = createTheme({
  colors: {
    primaryMain: palette.primary.main,
    primaryDark: palette.primary.dark,
    primaryLight: palette.primary.light,
    secondaryMain: palette.secondary.main,
    secondaryDark: palette.secondary.dark,
    secondaryLight: palette.secondary.light,
    greyMain: palette.grey.main,
    greyDark: palette.grey.dark,
    greyLight: palette.grey.light,
    warningMain: palette.warning.main,
    warningDark: palette.warning.dark,
    warningLight: palette.warning.light,
    infoMain: palette.info.main,
    infoDark: palette.info.dark,
    infoLight: palette.info.light,
    successMain: palette.success.main,
    successDark: palette.success.dark,
    successLight: palette.success.light,
    errorMain: palette.error.main,
    errorDark: palette.error.dark,
    errorLight: palette.error.light,
    typeBlackPrimary: palette.type.black.primary,
    typeBlackSecondary: palette.type.black.secondary,
    typeBlackTertiary: palette.type.black.tertairy,
    typeBlackDeactivated: palette.type.black.deactivated,
    typeWhitePrimary: palette.type.white.primary,
    typeWhiteSecondary: palette.type.white.secondary,
    typeWhiteTertiary: palette.type.white.tertiary,
    typeWhiteDeactivated: palette.type.white.deactivated,
    buttonActive: palette.button.active,
    buttonHover: palette.button.hover,
    buttonSelected: palette.button.selected,
    buttonDeactivated: palette.button.deactivated,
    buttonDeactivatedBackground: palette.button.deactivatedBackground,
    backgroundWhiteBase: palette.background.white.base,
    backgroundWhitePrimary: palette.background.white.primary,
    backgroundWhiteSecondary: palette.background.white.secondary,
    backgroundWhiteLine: palette.background.white.line,
    backgroundBlackBase: palette.background.black.base,
    backgroundBlackPrimary: palette.background.black.primary,
    backgroundBlackSecondary: palette.background.black.secondary,
    backgroundBlackLine: palette.background.black.line,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 600,
    web: 905,
    laptop: 1240,
    desktop: 1440,
  },
  shadows: {
    ...shadows,
  },
  misc: {
    ...misc,
  },
  textVariants: {
    ...typography,
  },
});

export type Theme = typeof theme;
export default theme;
