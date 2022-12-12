import { Box } from "@mui/material";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginBottom: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid",
        borderColor: "grey.main",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
