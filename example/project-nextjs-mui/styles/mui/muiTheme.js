import { createTheme } from "@mui/material/styles";
const colors = require("./colors");
const shadows = require("./shadows");
const typography = require("./typography");
const misc = require("./misc");

const theme = createTheme({
  palette: colors,
  typography: {
    ...typography,
    ...misc,
  },
  shadows,
});

export default theme;
