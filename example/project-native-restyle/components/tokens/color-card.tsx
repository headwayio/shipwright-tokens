import Box from "../../Box";
import Text from "../../Text";

const ColorCard = ({ title, bgColor, textColor }) => {
  return (
    <Box margin="s" width={90}>
      <Text color={textColor}>{title}</Text>
      <Box width={75} height={75} backgroundColor={bgColor} />
    </Box>
  );
};

export default ColorCard;
