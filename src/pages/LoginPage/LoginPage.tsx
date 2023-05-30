import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled className="login-container">
      <h1 className="login-container__title">Sign in</h1>
      <LoginForm
        actionOnSubmit={() => {
          true;
        }}
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
