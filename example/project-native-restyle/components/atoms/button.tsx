// Atom/Button

// ### Variables
// name              | type        | default        | options
// -----------------------------------------------------------------
// disabled            boolean       false
// icon                boolean       false
// id                  string        ""
// isSmall             boolean       false
// text                string        ""
// variant             string        "fill"           "fill", "outline", "ghost"

import Text from "../../Text";
import { TouchableOpacity, StyleSheet } from "react-native";
import theme from "../../theme";

const Button = ({
  disabled = false,
  id,
  isSmall = false,
  text,
  variant = "fill",
}) => {
  const classes = {
    fill: {
      backgroundColor: disabled
        ? theme.colors.buttonDeactivated
        : theme.colors.buttonActive,
      color: "typeWhitePrimary",
    },
    outline: {
      backgroundColor: theme.colors.backgroundWhiteBase,
      borderStyle: "solid",
      borderColor: theme.colors.buttonActive,
      borderWidth: 1,
      color: "buttonActive",
    },
    ghost: {
      color: "buttonActive",
    },
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: classes[variant].backgroundColor,
      borderColor: classes[variant].borderColor,
      borderRadius: 50,
      borderStyle: classes[variant].borderStyle,
      borderWidth: classes[variant].borderWidth,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: theme.spacing.xxl,
      paddingVertical: isSmall ? theme.spacing.s : theme.spacing.m,
    },
  });

  return (
    <TouchableOpacity style={styles.button} id={id} disabled={disabled}>
      <Text variant="500" color={classes[variant].color}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;