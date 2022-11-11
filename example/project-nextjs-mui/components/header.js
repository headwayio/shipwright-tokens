import Image from "next/image";
import { Typography } from "@mui/material";
import Container from "./contaner";
import Logo from "../public/images/headway.png";

const Header = () => {
  return (
    <Container>
      <Image
        objectFit="cover"
        src={Logo}
        alt="Make Waves"
        layout="fill"
        priority
      />
      <Typography variant="h4-400" sx={{ color: "type.black.secondary" }}>
        Shipwright Tokens - Next JS / MUI
      </Typography>
    </Container>
  );
};

export default Header;
