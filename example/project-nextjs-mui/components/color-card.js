import { Box, Typography } from "@mui/material";

const ColorCard = ({ title, backgroundColor }) => {
  return (
    <Box sx={{ margin: "0 5px" }}>
      <Typography>{title}:</Typography>
      <Box
        sx={{ width: 100, height: 100, backgroundColor: `${backgroundColor}` }}
      />
    </Box>
  );
};

export default ColorCard;
