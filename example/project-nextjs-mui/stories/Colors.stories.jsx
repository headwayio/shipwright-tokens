import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/mui/muiTheme";

import Colors from "../components/colors";

export default {
  title: "Example/Colors",
  component: Colors,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Colors {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {};
