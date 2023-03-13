import React from "react";
import Input from "../components/atoms/input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    arrow: {
      description:
        "display arrow at end of input. available if `variant` is `input`.",
      if: {
        arg: "variant",
        eq: "input",
      },
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      description: "attribute for disabled field.",
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: "boolean",
        },
      },
    },
    errorMessage: {
      description: "message informing user of invalid input.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    hintText: {
      description: "placeholder like text that sits above the input",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    icon: {
      control: "select",
      description:
        "feather icon name to place on left-hand side of input. you can use any feather icon name in this field, but the most common have been added as options to storybook. available if `variant` is `input`.",
      if: {
        arg: "variant",
        eq: "input",
      },
      options: ["search", "credit-card", "mail", "phone", "user"],
      table: {
        defaultValue: {
          summary: "search",
        },
        type: {
          summary: "string",
        },
      },
    },
    label: {
      description: "form input label.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    name: {
      description: "form input name.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
      type: {
        required: true,
      },
    },
    placeholder: {
      description: "attribute for placeholder that appears within input.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    required: {
      description: "attribute for required field",
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: "boolean",
        },
      },
    },
    rows: {
      description:
        "number of rows passed to textarea. available if `variant` is `textarea`.",
      if: {
        arg: "variant",
        eq: "textarea",
      },
      table: {
        defaultValue: {
          summary: "4",
        },
        type: {
          summary: "string",
        },
      },
    },
    successMessage: {
      description: "message informing user of valid input.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    type: {
      control: "select",
      description:
        "form input type (i.e. email, password, text, etc.). available if `variant` is `input`.",
      if: {
        arg: "variant",
        eq: "input",
      },
      options: ["text", "password", "email", "phone", "color", "date", "file"],
      table: {
        defaultValue: {
          summary: "text",
        },
        type: {
          summary: "string",
        },
      },
    },
    value: {
      description:
        "value of the input. useful for filling in form with previously submitted fields.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    variant: {
      control: "select",
      description: "either input field, select, or textarea.",
      options: ["input", "textarea"],
      table: {
        defaultValue: {
          summary: "input",
        },
        type: {
          summary: "string",
        },
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

const defaultArgs = {
    arrow: true,
    disabled: false,
    errorMessage: "",
    hintText: "",
    icon: "search",
    label: "Label",
    name: "inputName",
    placeholder: "Placeholder text",
    required: false,
    rows: "4",
    successMessage: "",
    type: "text",
    value: "",
    variant: "input"
  }

export const Default = Template.bind({});
Default.args = {
    ...defaultArgs
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  ...defaultArgs,
  errorMessage: "Error Message",
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  ...defaultArgs,
  successMessage: "Success Message"
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const NoIcons = Template.bind({});
NoIcons.args = {
  ...defaultArgs,
  arrow: false,
  icon: "",
};

export const Textarea = Template.bind({});
Textarea.args = {
  ...defaultArgs,
  variant: "textarea"
};
