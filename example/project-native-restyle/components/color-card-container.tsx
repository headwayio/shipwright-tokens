import Box from "../Box";
import Text from "../Text";

const ColorCardContainer = ({ title, children }) => {
  return (
    <Box
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text variant="h5-400">{title}</Text>
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
