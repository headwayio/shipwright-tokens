import { createTheme } from "@mui/material/styles";
const colors = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

const theme = createTheme({
  palette: colors,
  typography: {
    ...typography.headline,
    ...typography.body,
    ...typography.subtitle,
    ...typography.caption,
    ...typography.button,
    ...typography.overline,
    ...misc,
  },
  shadows,
});

export default theme;
