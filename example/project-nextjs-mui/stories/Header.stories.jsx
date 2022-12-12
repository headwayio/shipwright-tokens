import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/mui/muiTheme";

import Header from "../components/header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header {...args} />
  </ThemeProvider>
);

export const H2Warning = Template.bind({});
H2Warning.args = {
  color: "warning.main",
  variant: "h2-700",
};
