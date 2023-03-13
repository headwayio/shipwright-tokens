import button from "../templates/shipwright/components/atoms/button.html.twig";

export default {
  title: "Atoms/Buttons",
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
          summary: "none",
        },
        type: {
          summary: "string",
        },
      },
    },
    attributes: {
      control: "object",
      description: "give button custom attributes.",
      table: {
        type: {
          summary: "object",
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
        "display small version of button. only available if `icon` is `false`.",
      if: {
        arg: "icon",
        eq: false,
      },
      table: {
        defaultValue: {
          summary: false,
        },
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

const Template = (args) => button({ ...args });

const defaultArgs = {
  arrow: "both",
  attributes: {},
  iconDir: "right",
  iconNum: "",
  disabled: false,
  id: "",
  isSmall: false,
  text: "Button",
};

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  ...defaultArgs,
  icon: false,
  variant: "fill",
};

export const ButtonStroke = Template.bind({});
ButtonStroke.args = {
  ...defaultArgs,
  icon: false,
  variant: "outline",
};

export const ButtonGhost = Template.bind({});
ButtonGhost.args = {
  ...defaultArgs,
  icon: false,
  variant: "ghost",
};

export const IconButtonDefault = Template.bind({});
IconButtonDefault.args = {
  ...defaultArgs,
  icon: true,
  variant: "fill",
};

export const IconButtonStroke = Template.bind({});
IconButtonStroke.args = {
  ...defaultArgs,
  icon: true,
  variant: "outline",
};

export const IconButtonGhost = Template.bind({});
IconButtonGhost.args = {
  ...defaultArgs,
  icon: true,
  variant: "ghost",
};
