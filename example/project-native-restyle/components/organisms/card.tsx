// Organism/Card

// ### Variables
// name              | type        | default        | options
// ------------------------------------------------------------------
// button              object        {}
// image               string        ""
// text                string        ""
// title               string        ""

import Text from "../../Text";
import Box from "../../Box";
import { StyleSheet, Image } from "react-native";
import theme from "../../theme";
import Button from "../atoms/button";

const Card = ({ button, image, text, title }) => {
  const styles = StyleSheet.create({
    button: {
      flex: 0,
      flexDirection: "row",
    },
    card: {
      backgroundColor: theme.colors.backgroundWhiteBase,
      borderRadius: 8,
      marginHorizontal: theme.spacing.l,
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.s,
    },
    divider: {
      backgroundColor: theme.colors.backgroundWhiteLine,
      flex: 1,
      flexDirection: "row",
      height: 1,
      marginVertical: theme.spacing.m,
    },
    image: {
      borderRadius: 8,
      marginBottom: 16,
      maxHeight: 160,
      resizeMode: "cover",
      width: 350,
    },
    shadow: {
      shadowColor: "#000000",
      shadowOffset: {
        height: 6,
        width: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
    },
  });
  return (
    <Box style={[styles.card, styles.shadow]}>
      {image && <Image style={styles.image} source={image}></Image>}
      <Box>
        <Text variant={"h6-400"} color="typeBlackPrimary">
          {title}
        </Text>
        <Text variant={"400"} color="typeBlackSecondary">
          {text}
        </Text>
      </Box>
      <Box style={styles.divider}></Box>
      <Box style={styles.button}>
        <Button
          disabled={button.disabled}
          id={button.id}
          isSmall={button.isSmall}
          text={button.text}
          variant={button.variant}
        ></Button>
      </Box>
    </Box>
  );
};

export default Card;
