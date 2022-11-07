import { Typography } from "@mui/material";
import Container from "./contaner";

const Type = () => {
  return (
    <Container>
      <Typography variant="h4-regular" sx={{ color: "type.black.secondary" }}>
        Typography
      </Typography>
      <Typography variant="h1-regular">H1</Typography>
      <Typography variant="h1-italic">H1 Italic</Typography>
      <Typography variant="h1-bold">H1 Bold</Typography>
      <Typography variant="h2-regular">H2</Typography>
      <Typography variant="h2-italic">H2 Italic</Typography>
      <Typography variant="h2-bold">H2 Bold</Typography>
      <Typography variant="h3-regular">H3</Typography>
      <Typography variant="h3-italic">H3 Italic</Typography>
      <Typography variant="h3-bold">H3 Bold</Typography>
      <Typography variant="h4-regular">H4</Typography>
      <Typography variant="h4-italic">H4 Italic</Typography>
      <Typography variant="h4-bold">H4 Bold</Typography>
      <Typography variant="h5-regular">H5</Typography>
      <Typography variant="h5-italic">H5 Italic</Typography>
      <Typography variant="h5-bold">H5 Bold</Typography>
      <Typography variant="h6">H6</Typography>
      <Typography variant="h6-italic">H6 Italic</Typography>
      <Typography variant="h6-bold">H6 Bold</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="subtitle1-regular">Subtitle 1</Typography>
      <Typography variant="subtitle1-semiBold">Subtitle 1 Semi-Bold</Typography>
      <Typography variant="subtitle2-medium">Subtitle 2 Medium</Typography>
      <Typography variant="subtitle2-semiBold">Subtitle 2 Semi-Bold</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="button">Button</Typography>
      <Typography variant="overline">Overline</Typography>
    </Container>
  );
};

export default Type;
