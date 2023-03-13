import Colors from "../templates/shipwright/components/tokens/colors.html.twig";

export default {
    title: "Tokens/Colors",
    argTypes: {}
};

const Template = (args) => Colors({...args});

export const Palette = Template.bind({});