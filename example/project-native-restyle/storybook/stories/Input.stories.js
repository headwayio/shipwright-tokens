import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../../theme";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Input from "../../components/atoms/input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const task = {
  title: "Atoms/Input",
};

storiesOf("Input", module)
  .addDecorator((story) => (
    <ScrollView>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </View>
    </ScrollView>
  ))
  .add("Default", () => (
    <Input label="Label" placeholder="Placeholder text..." />
  ))
  .add("Hint Text", () => (
    <Input
      label="Label"
      placeholder="Placeholder text..."
      hintText="Hint: Optional Text"
    />
  ))
  .add("Error Message", () => (
    <Input
      label="Label"
      placeholder="Placeholder text..."
      errorMessage="Error: Optional Message"
    />
  ))
  .add("Success Message", () => (
    <Input
      label="Label"
      placeholder="Placeholder text..."
      successMessage="Success: Optional Message"
    />
  ));
