import React from "react";
import Colors from '../components/tokens/colors';

export default {
    title: "Tokens/Colors",
    component: Colors,
    argTypes: {},

};

const Template = (args) => <Colors {...args} />;

export const Palette = Template.bind({});
