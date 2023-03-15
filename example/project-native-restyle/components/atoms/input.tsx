// Atom/Input

// ### Variables
// name              | type        | default        | options
// ------------------------------------------------------------------
// errorMessage        string        ""
// hintText            string        ""
// label               string        ""
// placeholder         string        ""
// successMessage      string        ""

import Text from "../../Text";
import Box from "../../Box";
import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import theme from "../../theme";

const Input = ({
  hintText,
  label,
  placeholder,
  errorMessage,
  successMessage,
}) => {
  const [focus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(!focus);
  };

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      paddingHorizontal: theme.spacing.m,
      flex: 1,
      flexDirection: "column",
      gap: theme.spacing.s,
    },
    input: {
      borderWidth: 1,
      borderColor: focus
        ? theme.colors.buttonActive
        : theme.colors.backgroundBlackLine,
      paddingHorizontal: theme.spacing.s,
      paddingVertical: theme.spacing.xs,
      flex: 1,
      marginVertical: theme.spacing.xs,
    },
    label: {
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      flexDirection: "row",
    },
  });

  return (
    <Box style={styles.container}>
      <Box style={styles.label}>
        <Text variant={"600"}>{label}</Text>
        <Text variant={"400"}>{hintText}</Text>
      </Box>
      <Box flex={1} flexDirection="row">
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onFocus={focusHandler}
        ></TextInput>
      </Box>
      {errorMessage && (
        <Text variant={"400"} color={"errorDark"}>
          {errorMessage}
        </Text>
      )}
      {successMessage && (
        <Text variant={"400"} color={"successDark"}>
          {successMessage}
        </Text>
      )}
    </Box>
  );
};

export default Input;
