import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { paths } from "../../utils/paths/paths";
import NavbarStyled from "./NavbarStyled";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  const actionOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate(paths.login);
    toggleMenu();
  };

  return (
    <NavbarStyled className="navbar-container">
      <Burger
        className={`navbar-container_burger-button ${
          isOpen ? "navbar-container_burger-button--open" : ""
        }`}
        actionOnClick={toggleMenu}
        type="button"
        ariaLabel="burger menu icon"
      />
      {isOpen && (
        <div
          className="navbar-toggle"
          onClick={toggleMenu}
          tabIndex={0}
          role="button"
          onKeyUp={toggleMenu}
        ></div>
      )}
      <ul
        className={`navbar-list ${
          isOpen ? "navbar-list--open" : "navbar-list--close"
        }`}
        tabIndex={0}
        role="menu"
      >
        <li className="navbar-list__link">
          <NavLink to={paths.home} onClick={toggleMenu} onKeyUp={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className="navbar-list__link">
          <NavLink to={paths.animals} onClick={toggleMenu} onKeyUp={toggleMenu}>
            Adoption List
          </NavLink>
        </li>
        {isLogged ? (
          <li className="navbar-list__link">
            <Button
              className="navbar-list__link"
              actionOnClick={actionOnClick}
              text="Sign out"
            />
          </li>
        ) : (
          <li className="navbar-list__link">
            <NavLink to={paths.login} onClick={toggleMenu} onKeyUp={toggleMenu}>
              Sign in
            </NavLink>
          </li>
        )}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
