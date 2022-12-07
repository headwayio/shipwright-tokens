import Container from "./container";
import ColorCardContainer from "./color-card-container";
import ColorCard from "./color-card";

const Colors = () => {
  return (
    <Container title="Colors">
      <ColorCardContainer title="Primary">
        <ColorCard title="Main" bgColor="primaryMain" />
        <ColorCard title="Dark" bgColor="primaryDark" />
        <ColorCard title="Light" bgColor="primaryLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Secondary">
        <ColorCard title="Main" bgColor="secondaryMain" />
        <ColorCard title="Dark" bgColor="secondaryDark" />
        <ColorCard title="Light" bgColor="secondaryLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Grey">
        <ColorCard title="Main" bgColor="greyMain" />
        <ColorCard title="Dark" bgColor="greyDark" />
        <ColorCard title="Light" bgColor="greyLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Warning">
        <ColorCard title="Main" bgColor="warningMain" />
        <ColorCard title="Dark" bgColor="warningDark" />
        <ColorCard title="Light" bgColor="warningLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Info">
        <ColorCard title="Main" bgColor="infoMain" />
        <ColorCard title="Dark" bgColor="infoDark" />
        <ColorCard title="Light" bgColor="infoLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Success">
        <ColorCard title="Main" bgColor="successMain" />
        <ColorCard title="Dark" bgColor="successDark" />
        <ColorCard title="Light" bgColor="successLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Error">
        <ColorCard title="Main" bgColor="errorMain" />
        <ColorCard title="Dark" bgColor="errorDark" />
        <ColorCard title="Light" bgColor="errorLight" />
      </ColorCardContainer>
      <ColorCardContainer title="Button">
        <ColorCard title="Active" bgColor="buttonActive" />
        <ColorCard title="Hover" bgColor="buttonHover" />
        <ColorCard title="Selected" bgColor="buttonSelected" />
        <ColorCard title="Deactivated" bgColor="buttonDeactivated" />
        <ColorCard
          title="Deactivated Background"
          bgColor="buttonDeactivatedBackground"
        />
      </ColorCardContainer>
      <ColorCardContainer title="Type">
        <ColorCardContainer title="Black">
          <ColorCard title="Primary" bgColor="typeBlackPrimary" />
          <ColorCard title="Secondary" bgColor="typeBlackSecondary" />
          <ColorCard title="Tertiary" bgColor="typeBlackTertiary" />
          <ColorCard title="Deactivated" bgColor="typeBlackDeactivated" />
        </ColorCardContainer>
        <ColorCardContainer title="White">
          <ColorCard title="Primary" bgColor="typeWhitePrimary" />
          <ColorCard title="Secondary" bgColor="typeWhiteSecondary" />
          <ColorCard title="Tertiary" bgColor="typeWhiteTertiary" />
          <ColorCard title="Deactivated" bgColor="typeWhiteDeactivated" />
        </ColorCardContainer>
      </ColorCardContainer>
      <ColorCardContainer title="Background">
        <ColorCardContainer title="Black">
          <ColorCard title="Base" bgColor="backgroundBlackBase" />
          <ColorCard title="Primary" bgColor="backgroundBlackPrimary" />
          <ColorCard title="Secondary" bgColor="backgroundBlackSecondary" />
          <ColorCard title="Line" bgColor="backgroundBlackLine" />
        </ColorCardContainer>
        <ColorCardContainer title="White">
          <ColorCard title="Base" bgColor="backgroundBlackBase" />
          <ColorCard title="Primary" bgColor="backgroundBlackPrimary" />
          <ColorCard title="Secondary" bgColor="backgroundBlackSecondary" />
          <ColorCard title="Line" bgColor="backgroundBlackLine" />
        </ColorCardContainer>
      </ColorCardContainer>
    </Container>
  );
};

export default Colors;
