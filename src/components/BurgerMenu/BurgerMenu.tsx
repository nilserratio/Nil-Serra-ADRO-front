import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../store";
import BurgerMenuStyled from "./BurgerMenuStyled";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { paths } from "../../utils/paths/paths";
import Button from "../Button/Button";

const BurgerMenu = (): React.ReactElement => {
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
    <BurgerMenuStyled className="navbar-container">
      <NavLink className="navbar-container__link" to={paths.home}>
        Home
      </NavLink>
      {isLogged ? (
        <Button
          className="navbar-container__link"
          actionOnClick={actionOnClick}
          text="Sign out"
        />
      ) : (
        <NavLink className="navbar-container__link" to={paths.login}>
          Sign in
        </NavLink>
      )}
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
