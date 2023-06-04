import { useState } from "react";
import { UserCredentials } from "../../types";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";

interface LoginFormProps {
  actionOnSubmit: (user: UserCredentials) => void;
}

const LoginForm = ({ actionOnSubmit }: LoginFormProps): React.ReactElement => {
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

  const onSubmitUserData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  const disabledButton =
    userCredentials.username === "" || userCredentials.password === "";

  return (
    <LoginFormStyled
      className="loginForm-container"
      autoComplete="off"
      onSubmit={onSubmitUserData}
    >
      <div className="loginForm__control">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={onChangeData}
          value={userCredentials.username}
        />
      </div>

      <div className="loginForm__control">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={onChangeData}
          value={userCredentials.password}
        />
      </div>

      <Button
        className="loginForm__submit"
        type="submit"
        isDisable={disabledButton}
        text="Sign in"
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
