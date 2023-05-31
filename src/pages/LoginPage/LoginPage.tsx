import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/token/useToken";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../utils/paths/paths";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const { decodeToken } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = useLocalStorage();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getToken(userCredentials);

    if (token) {
      const userData = decodeToken(token);

      dispatch(loginUserActionCreator(userData));
      setToken("token", token);
      navigate(paths.home, { replace: true });
    }
  };

  return (
    <LoginPageStyled className="login-container">
      <h1 className="login-container__title">Sign in</h1>
      <LoginForm actionOnSubmit={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
