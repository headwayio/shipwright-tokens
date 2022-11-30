import Box from "../Box";
import Text from "../Text";

const ColorCard = ({ title, bgColor }) => {
  return (
    <Box margin="s">
      <Text>{title}</Text>
      <Box width={75} height={75} backgroundColor={bgColor} />
    </Box>
  );
};

export default ColorCard;
