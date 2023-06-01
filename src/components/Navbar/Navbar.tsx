import { NavLink, useNavigate } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../utils/paths/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Navbar = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const actionOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate(paths.login);
  };

  return (
    <NavbarStyled className="navbar-container">
      <NavLink className="navbar-container__link" to="/">
        Home
      </NavLink>
      {isLogged ? (
        <button className="navbar-container__link" onClick={actionOnClick}>
          Sign out
        </button>
      ) : (
        <NavLink className="navbar-container__link" to={paths.login}>
          Sign in
        </NavLink>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
