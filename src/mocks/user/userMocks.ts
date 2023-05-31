import { UserStateStructure, UserTokenStructure } from "../../store/types";
import { UserCredentials } from "../../types";

export const userTokenDataMock: UserTokenStructure = {
  id: "646fa090b926156009746913",
  token: "mocked-token",
};

export const userInitialStateMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const loginUserDataMock: UserCredentials = {
  username: "John",
  password: "John",
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZhNGE2YWUyN2UxMDIyNzZmMDk4ZDYiLCJuYW1lIjoidXNhaWFzIiwiaWF0IjoxNjg0NzQ5ODIwLCJleHAiOjE2ODUzNTQ2MjB9.oPNY8Bunrz4W6e540NRbHyL1qEbJUbha5a-_BGo-fX4";
