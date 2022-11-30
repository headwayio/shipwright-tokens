import shipwrightTheme from "./styles/restyleTheme";
const theme = {
  ...shipwrightTheme,
  textVariants: {
    ...shipwrightTheme.textVariants,
    defaults: {
      fontSize: "16",
    },
  },
};
export type Theme = typeof theme;
export default theme;
