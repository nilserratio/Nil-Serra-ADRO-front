import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavbarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        <p>Home</p>
      </NavLink>
      <NavLink className="navbar-container__link" to="/signIn">
        <p>Sign in</p>
      </NavLink>
    </NavBarStyled>
  );
};

export default NavBar;
