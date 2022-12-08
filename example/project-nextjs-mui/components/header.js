import Image from "next/image";
import { Typography } from "@mui/material";
import Container from "./contaner";
import Logo from "../public/images/headway.png";

const Header = ({ color = "type.black.secondary", variant = "h4-400" }) => {
  return (
    <Container>
      <Image
        src={"/" + Logo}
        // src={"/../public/images/headway.png"}
        alt="Make Waves"
        layout="fill"
        fill
        priority
      />
      <Typography variant={variant} sx={{ color }}>
        Shipwright Tokens - Next JS / MUI
      </Typography>
    </Container>
  );
};

export default Header;
