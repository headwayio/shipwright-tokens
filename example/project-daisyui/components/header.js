import Head from "next/head";
import Image from "next/image";
import Logo from "../public/images/Headway_White_Outline_Logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center w-3/4 pb-3 mb-5 border-b-2">
      <div className="relative w-32 h-32 my-3 overflow-hidden">
        <Image
          objectFit="cover"
          src={Logo}
          alt="Make Waves"
          layout="fill"
          priority
        />
      </div>
      <h1 className="h4 text-type-black-secondary">
        Shipwright Tokens - Next JS / Tailwind CSS
      </h1>
    </div>
  );
};

export default Header;
