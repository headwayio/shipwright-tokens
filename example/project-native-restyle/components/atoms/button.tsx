import Text from "../../Text";
import { TouchableOpacity, StyleSheet } from "react-native";
import theme from "../../theme";

const ButtonDefault = ({
    disabled = false,
    id,
    isSmall = false,
    text,
    variant = "fill"
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
      paddingHorizontal: theme.spacing.xxl,
      paddingVertical: isSmall ? theme.spacing.s : theme.spacing.m,
      backgroundColor: classes[variant].backgroundColor,
      borderRadius: 50,
      borderStyle: classes[variant].borderStyle,
      borderColor: classes[variant].borderColor,
      borderWidth: classes[variant].borderWidth,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
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

export default ButtonDefault;
