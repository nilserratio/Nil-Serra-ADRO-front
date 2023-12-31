import HeaderStyled from "./HeaderStyled";
import { paths } from "../../utils/paths/paths";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header-container">
      <NavLink to={paths.home} className="header-container__anchor">
        <img
          className="header-container__logo"
          src="images/adro-logo.webp"
          alt="Adro Osona logo with a dog footprint"
          width={130}
          height={90}
        />
      </NavLink>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
