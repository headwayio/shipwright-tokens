import Box from "../../Box";
import Text from "../../Text";

const ColorCardContainer = ({
  titleVariant = "h5-400",
  title,
  children,
  bgColor,
  textColor,
}) => {
  return (
    <Box
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={bgColor}
    >
      <Text variant={titleVariant} color={textColor}>
        {title}
      </Text>
      <Box
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ColorCardContainer;
