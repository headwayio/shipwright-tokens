import React from "react";
import Card from "../components/organisms/card";

export default {
  title: "Organisms/Card",
  component: Card,
  argTypes: {
    button: {
      control: "object",
      description:
        "add button to card. `button` accepts an object that matches the arguments available to the `button` atom component.",
      table: {
        type: {
          summary: "object",
        },
      },
    },
    image: {
      control: "text",
      description: "add image to card, enter path to image.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isStandard: {
      control: "boolean",
      description:
        "ensure card has standardized height, regardless of content.",
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
      description: "add text to card. text appears below title.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: "text",
      description: "add title to card. title appears abpve text.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

const defaultButton = {
  arrow: "none",
  icon: false,
  iconDir: "right",
  iconNum: "",
  disabled: false,
  id: "",
  isSmall: true,
  text: "Button Text",
  variant: "outline",
};

const defaultArgs = {
  button: {
    ...defaultButton
  },
  image:
    "https://investorplace.com/wp-content/uploads/2019/07/tech1600a-768x432.jpg",
  isStandard: false,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  title: "Card Title",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...defaultArgs,
  button: {
    ...defaultButton,
    variant: "fill"
  },
  image: "",
};

export const StandardizedSize = Template.bind({});
StandardizedSize.args = {
  ...defaultArgs,
  image: "",
  isStandard: true
};
