import {
  userInitialStateMock,
  userLoggedStateMock,
} from "../../../mocks/user/userMocks";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it recieve a current state and logoutUser action with the user on the payload", () => {
    test("Then it should set the state to the initial user state", () => {
      const newUserDataState = userLoggedStateMock;

      const inicialUserState = userReducer(
        newUserDataState,
        logoutUserActionCreator()
      );

      expect(inicialUserState).toStrictEqual(userInitialStateMock);
    });
  });
});
