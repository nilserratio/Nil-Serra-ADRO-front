import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/" aria-label="home">
        <span>Home</span>
      </NavLink>
      <NavLink
        className="navbar-container__link"
        to="/signIn"
        aria-label="signIn"
      >
        <span>Sign in</span>
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
