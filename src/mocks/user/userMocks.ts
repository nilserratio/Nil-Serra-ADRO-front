import { UserStateStructure, UserTokenStructure } from "../../store/types";
import { UserCredentials } from "../../types";

export const userTokenDataMock: UserTokenStructure = {
  id: "646a4a6ae27e102276f098d6",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZhNGE2YWUyN2UxMDIyNzZmMDk4ZDYiLCJuYW1lIjoidXNhaWFzIiwiaWF0IjoxNjg0NzQ5ODIwLCJleHAiOjE2ODUzNTQ2MjB9.oPNY8Bunrz4W6e540NRbHyL1qEbJUbha5a-_BGo-fX4",
};

export const userInitialStateMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const userLoggedStateMock: UserStateStructure = {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZhNGE2YWUyN2UxMDIyNzZmMDk4ZDYiLCJuYW1lIjoidXNhaWFzIiwiaWF0IjoxNjg0NzQ5ODIwLCJleHAiOjE2ODUzNTQ2MjB9.oPNY8Bunrz4W6e540NRbHyL1qEbJUbha5a-_BGo-fX4",
  isLogged: true,
};

export const loginUserDataMock: UserCredentials = {
  username: "John",
  password: "John",
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZhNGE2YWUyN2UxMDIyNzZmMDk4ZDYiLCJuYW1lIjoidXNhaWFzIiwiaWF0IjoxNjg0NzQ5ODIwLCJleHAiOjE2ODUzNTQ2MjB9.oPNY8Bunrz4W6e540NRbHyL1qEbJUbha5a-_BGo-fX4";

export const invalidLoginUserDataMock: UserCredentials = {
  username: "",
  password: "",
};
