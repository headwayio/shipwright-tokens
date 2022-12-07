import Box from "../Box";
import Text from "../Text";

const Container = ({ title, children }) => {
  return (
    <Box
      alignSelf={"center"}
      width={"90%"}
      padding={"xl"}
      paddingHorizontal={"m"}
      borderBottomWidth={1}
      borderBottomColor={"typeBlackSecondary"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text variant="h4-400" color="typeBlackSecondary" textAlign="center" marginBottom="s">{title}</Text>
      <Box>{children}</Box>
    </Box>
  );
};

export default Container;
