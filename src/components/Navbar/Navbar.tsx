import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../utils/paths/paths";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink className="navbar-container__link" to={paths.login}>
        <span>Sign in</span>
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
