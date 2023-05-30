import { UserStateStructure, UserTokenStructure } from "../store/types";

export const userTokenDataMock: UserTokenStructure = {
  id: "646fa090b926156009746913",
  token: "mocked-token",
};

export const userInitialStateMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};
