import React from "react";
import Typography from '../components/tokens/typography';

export default {
    title: "Tokens/Typography",
    component: Typography,
    argTypes: {},

};

const Template = (args) => <Typography {...args} />;

export const Type = Template.bind({});
