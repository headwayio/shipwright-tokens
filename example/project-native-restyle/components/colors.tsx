import Container from "./container";
import ColorCardContainer from "./color-card-container";
import ColorCard from "./color-card";
import Text from "../Text";

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
        <ColorCardContainer bgColor="backgroundBlackPrimary">
          <ColorCard
            title="Deactivated"
            textColor="typeWhitePrimary"
            bgColor="buttonDeactivated"
          />
          <ColorCard
            title="Deactivated Background"
            textColor="typeWhitePrimary"
            bgColor="buttonDeactivatedBackground"
          />
        </ColorCardContainer>
      </ColorCardContainer>
      <ColorCardContainer title="Type" titleVariant="h4-400">
        <ColorCardContainer title="Black">
          <ColorCard title="Primary" bgColor="typeBlackPrimary" />
          <ColorCard title="Secondary" bgColor="typeBlackSecondary" />
          <ColorCard title="Tertiary" bgColor="typeBlackTertiary" />
          <ColorCard title="Deactivated" bgColor="typeBlackDeactivated" />
        </ColorCardContainer>
        <ColorCardContainer
          title="White"
          bgColor="backgroundBlackPrimary"
          textColor="typeWhitePrimary"
        >
          <ColorCard
            title="Primary"
            bgColor="typeWhitePrimary"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Secondary"
            bgColor="typeWhiteSecondary"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Tertiary"
            bgColor="typeWhiteTertiary"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Deactivated"
            bgColor="typeWhiteDeactivated"
            textColor="typeWhitePrimary"
          />
        </ColorCardContainer>
      </ColorCardContainer>
      <ColorCardContainer title="Background" titleVariant="h4-400">
        <ColorCardContainer title="Black">
          <ColorCard title="Base" bgColor="backgroundBlackBase" />
          <ColorCard title="Primary" bgColor="backgroundBlackPrimary" />
          <ColorCard title="Secondary" bgColor="backgroundBlackSecondary" />
          <ColorCard title="Line" bgColor="backgroundBlackLine" />
        </ColorCardContainer>
        <ColorCardContainer
          title="White"
          bgColor="backgroundBlackPrimary"
          textColor="typeWhitePrimary"
        >
          <ColorCard
            title="Base"
            bgColor="backgroundWhiteBase"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Primary"
            bgColor="backgroundWhitePrimary"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Secondary"
            bgColor="backgroundWhiteSecondary"
            textColor="typeWhitePrimary"
          />
          <ColorCard
            title="Line"
            bgColor="backgroundWhiteLine"
            textColor="typeWhitePrimary"
          />
        </ColorCardContainer>
      </ColorCardContainer>
    </Container>
  );
};

export default Colors;
