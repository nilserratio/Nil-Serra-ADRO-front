import { useState } from "react";
import { UserCredentials } from "../../types";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const disabledButton =
    userCredentials.username === "" || userCredentials.password === "";

  return (
    <LoginFormStyled className="loginForm-container" autoComplete="off">
      <div className="login-container__control">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={onChangeData}></input>
      </div>

      <div className="login-container__control">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChangeData}></input>
      </div>

      <button className="login-container__submit" disabled={disabledButton}>
        Sign in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
