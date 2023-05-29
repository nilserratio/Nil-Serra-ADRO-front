import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        <p>Home</p>
      </NavLink>
      <NavLink className="navbar-container__link" to="/signIn">
        <p>Sign in</p>
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
