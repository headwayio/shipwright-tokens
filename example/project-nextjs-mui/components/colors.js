import { Typography } from "@mui/material";
import Container from "./contaner";
import ColorCardContainer from "./color-card-container";
import ColorCard from "./color-card";

const Colors = () => {
  return (
    <Container>
      <Typography variant="h4-regular" sx={{ color: "type.black.secondary" }}>
        Colors
      </Typography>
      <ColorCardContainer title="Primary">
        <ColorCard title="Main" backgroundColor="primary.main" />
        <ColorCard title="Dark" backgroundColor="primary.dark" />
        <ColorCard title="Light" backgroundColor="primary.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Secondary">
        <ColorCard title="Main" backgroundColor="secondary.main" />
        <ColorCard title="Dark" backgroundColor="secondary.dark" />
        <ColorCard title="Light" backgroundColor="secondary.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Grey">
        <ColorCard title="Main" backgroundColor="grey.main" />
        <ColorCard title="Dark" backgroundColor="grey.dark" />
        <ColorCard title="Light" backgroundColor="grey.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Warning">
        <ColorCard title="Main" backgroundColor="warning.main" />
        <ColorCard title="Dark" backgroundColor="warning.dark" />
        <ColorCard title="Light" backgroundColor="warning.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Info">
        <ColorCard title="Main" backgroundColor="info.main" />
        <ColorCard title="Dark" backgroundColor="info.dark" />
        <ColorCard title="Light" backgroundColor="info.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Success">
        <ColorCard title="Main" backgroundColor="success.main" />
        <ColorCard title="Dark" backgroundColor="success.dark" />
        <ColorCard title="Light" backgroundColor="success.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Error">
        <ColorCard title="Main" backgroundColor="error.main" />
        <ColorCard title="Dark" backgroundColor="error.dark" />
        <ColorCard title="Light" backgroundColor="error.light" />
      </ColorCardContainer>
      <ColorCardContainer title="Button">
        <ColorCard title="Active" backgroundColor="button.active" />
        <ColorCard title="Hover" backgroundColor="button.hover" />
        <ColorCard title="Selected" backgroundColor="button.selected" />
        <ColorCard title="Deactivated" backgroundColor="button.deactivated" />
        <ColorCard
          title="Deactivated Background"
          backgroundColor="button.deactivatedBackground"
        />
      </ColorCardContainer>
      <ColorCardContainer title="Type">
        <ColorCardContainer title="Black">
          <ColorCard title="Primary" backgroundColor="type.black.primary" />
          <ColorCard title="Secondary" backgroundColor="type.black.secondary" />
          <ColorCard title="Tertiary" backgroundColor="type.black.tertairy" />
          <ColorCard
            title="Deactivated"
            backgroundColor="type.black.deactivated"
          />
        </ColorCardContainer>
        <ColorCardContainer title="White">
          <ColorCard title="Primary" backgroundColor="type.white.primary" />
          <ColorCard title="Secondary" backgroundColor="type.white.secondary" />
          <ColorCard title="Tertiary" backgroundColor="type.white.tertiary" />
          <ColorCard
            title="Deactivated"
            backgroundColor="type.white.deactivated"
          />
        </ColorCardContainer>
      </ColorCardContainer>
      <ColorCardContainer title="Background">
        <ColorCardContainer title="Black">
          <ColorCard title="Base" backgroundColor="background.black.base" />
          <ColorCard
            title="Primary"
            backgroundColor="background.black.primary"
          />
          <ColorCard
            title="Secondary"
            backgroundColor="background.black.secondary"
          />
          <ColorCard title="Line" backgroundColor="background.black.line" />
        </ColorCardContainer>
        <ColorCardContainer title="White">
          <ColorCard title="Base" backgroundColor="background.white.base" />
          <ColorCard
            title="Primary"
            backgroundColor="background.white.primary"
          />
          <ColorCard
            title="Secondary"
            backgroundColor="background.white.secondary"
          />
          <ColorCard title="Line" backgroundColor="background.white.line" />
        </ColorCardContainer>
      </ColorCardContainer>
    </Container>
  );
};

export default Colors;
