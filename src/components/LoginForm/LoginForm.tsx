import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="loginForm-container" autoComplete="off">
      <div className="login-container__control">
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
      </div>

      <div className="login-container__control">
        <label htmlFor="password">Password</label>
        <input id="password" type="password"></input>
      </div>

      <button className="login-container__submit">Sign in</button>
    </LoginFormStyled>
  );
};

export default LoginForm;
