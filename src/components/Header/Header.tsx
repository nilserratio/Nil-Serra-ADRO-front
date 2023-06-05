import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header-container">
      <img
        className="header-container__logo"
        src="images/adro-logo.svg"
        alt="Adro Osona logo with a dog footprint"
        width={133}
        height={76}
      />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;