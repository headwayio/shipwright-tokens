import { Box, Typography } from "@mui/material";

const ColorCardContainer = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "15px 0",
      }}
    >
      <Typography variant="h5-400">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "75%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ColorCardContainer;
