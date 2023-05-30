import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink className="navbar-container__link" to="/login">
        <span>Sign in</span>
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
