import { createTheme } from "@mui/material/styles";
const palette = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

const theme = createTheme({
  palette,
  typography: {
    ...typography,
    ...misc,
  },
  shadows,
});

export default theme;
