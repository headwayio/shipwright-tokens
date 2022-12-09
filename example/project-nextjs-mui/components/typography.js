import { Typography } from "@mui/material";
import Container from "./container";

const Type = () => {
  return (
    <Container>
      <Typography variant="h4-400" sx={{ color: "type.black.secondary" }}>
        Typography
      </Typography>
      <Typography variant="h1-400">H1 400</Typography>
      <Typography variant="h1-700">H1 700</Typography>
      <Typography variant="h2-400">H2 400</Typography>
      <Typography variant="h2-700">H2 700</Typography>
      <Typography variant="h3-400">H3 400</Typography>
      <Typography variant="h3-700">H3 700</Typography>
      <Typography variant="h4-400">H4 400</Typography>
      <Typography variant="h4-700">H4 700</Typography>
      <Typography variant="h5-400">H5 400</Typography>
      <Typography variant="h5-700">H5 700</Typography>
      <Typography variant="h6-400">H6 400</Typography>
      <Typography variant="h6-700">H6 700</Typography>
      <Typography variant="400">400</Typography>
      <Typography variant="500">500</Typography>
      <Typography variant="600">600</Typography>
      <Typography variant="700">700</Typography>
    </Container>
  );
};

export default Type;
