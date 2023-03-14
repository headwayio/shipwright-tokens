import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../../theme";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Typography from "../../components/typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const task = {
  title: "Tokens/Typography",
};

storiesOf("Typography", module)
  .addDecorator((story) => (
    <ScrollView>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </View>
    </ScrollView>
  ))
  .add("Typography", () => <Typography />);
