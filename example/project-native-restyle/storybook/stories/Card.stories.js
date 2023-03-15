import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../../theme";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Card from "../../components/organisms/card";
import image from "../../assets/images/card.jpg"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const task = {
  title: "Organisms/Card",
};
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const buttonProps = {
    disabled: false,
    id: "card-button",
    isSmall: true,
    text: "Click me",
    variant: "outline"
};

storiesOf("Card", module)
  .addDecorator((story) => (
    <ScrollView>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </View>
    </ScrollView>
  ))
  .add("Card", () => <Card title="Card Title" text={lorem} button={buttonProps} image={image}/>);
