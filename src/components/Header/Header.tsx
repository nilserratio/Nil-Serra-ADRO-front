import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";
import { paths } from "../../utils/paths/paths";
import { NavLink } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header-container">
      <NavLink to={paths.home}>
        <img
          className="header-container__logo"
          src="images/adro-logo.svg"
          alt="Adro Osona logo with a dog footprint"
          width={133}
          height={76}
        />
      </NavLink>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
