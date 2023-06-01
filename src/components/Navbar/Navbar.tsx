import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../utils/paths/paths";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-container__link" to={paths.login}>
        Sign in
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
