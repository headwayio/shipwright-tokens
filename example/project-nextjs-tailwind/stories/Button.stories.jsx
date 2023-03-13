import React from "react";
import Button from "../components/atoms/button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    arrow: {
      control: "inline-radio",
      description:
        "add arrow(s) onto button. only available if `icon` is `false`.",
      if: {
        arg: "icon",
        eq: false,
      },
      options: ["none", "left", "right", "both"],
      table: {
        defaultValue: {
          summary: "both",
        },
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "disable button & give disabled styling.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    icon: {
      control: "boolean",
      description: "apply button-icon styling & rules.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    iconDir: {
      control: "inline-radio",
      description:
        "control direction of arrow on icon variant. only available if `icon` is `true`.",
      if: {
        arg: "icon",
        eq: true,
      },
      options: ["left", "right"],
      table: {
        defaultValue: {
          summary: "none",
        },
        type: {
          summary: "string",
        },
      },
    },
    iconNum: {
      control: "text",
      description:
        "replace icon arrows with text. only available if `icon` is `true`.",
      if: {
        arg: "icon",
        eq: true,
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    id: {
      control: "text",
      description: "give button a unique id.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isSmall: {
      control: "boolean",
      description:
        "selects height of button. only available if `icon` is `false`.",
      if: {
        arg: "icon",
        eq: false,
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    text: {
      control: "text",
      description: "add text to button. only available if `icon` is `false`.",
      if: {
        arg: "icon",
        eq: false,
      },
      table: {
        type: {
          summary: "string",
        },
      },
      type: {
        required: true,
      },
    },
    variant: {
      control: "inline-radio",
      description: "selects styling of button.",
      options: ["fill", "outline", "ghost"],
      table: {
        defaultValue: {
          summary: "fill",
        },
        type: {
          summary: "string",
        },
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

const defaultArgs = {
  arrow: "both",
  icon: false,
  iconDir: "right",
  iconNum: "",
  disabled: false,
  id: "",
  isSmall: false,
  text: "Button",
};

export const Fill = Template.bind({});
Fill.args = {
  ...defaultArgs,
};

export const Outline = Template.bind({});
Outline.args = {
  ...defaultArgs,
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultArgs,
  variant: "ghost",
};

export const Icon = Template.bind({});
Icon.args = {
  ...defaultArgs,
  icon: true,
};
