import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../../theme";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Button from "../../components/atoms/button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const task = {
  title: "Atoms/Button",
};

storiesOf("Button", module)
  .addDecorator((story) => (
    <ScrollView>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </View>
    </ScrollView>
  ))
  .add("Fill", () => <Button text="Button" id="fill" variant="fill" />)
  .add("Outline", () => <Button text="Button" id="outline" variant="outline" />)
  .add("Ghost", () => <Button text="Button" id="ghost" variant="ghost" />)
  .add("Small", () => (
    <Button text="Button" id="small" variant="fill" isSmall={true} />
  ));
