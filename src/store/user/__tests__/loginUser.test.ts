import {
  userInitialStateMock,
  userTokenDataMock,
} from "../../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "../userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it recieve a current state and loginUser action with the user on the payload", () => {
    test("Then it should return a new state with the isLogged property on true", () => {
      const currentUserState = userInitialStateMock;
      const newUserDataState = userTokenDataMock;
      const expectedIsLoggedState = true;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(newUserDataState)
      );

      expect(newUserState.isLogged).toBe(expectedIsLoggedState);
    });
  });
});
