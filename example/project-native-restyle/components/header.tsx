import Container from "./container";
import { Image } from "react-native";

const Header = () => {
  return (
    <Container title="Shipwright Tokens - React Native / Restyle">
      {<Image source={require('../assets/headway.png')}/>}
    </Container>
  );
};

export default Header;
