import { renderHook } from "@testing-library/react";
import useUser from "../useUser";
import { loginUserDataMock } from "../../../mocks/user/userMocks";
import { tokenMock } from "../../../mocks/user/userMocks";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { UserCredentials } from "../../../types";
import { wrapper } from "../../../utils/testUtils/testUtils";

describe("Given a useUser custom hook with getToken function", () => {
  const user: UserCredentials = loginUserDataMock;

  describe("When the function getToken is called with a username a and password", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When the function getToken is called with an invalid user credentials", () => {
    test("Then it should show a feedback modal error with the message 'Wrong Credentials'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const getTokenFunction = await getToken(user);

      expect(getTokenFunction).toBeUndefined();
    });
  });
});
