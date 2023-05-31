import { renderHook } from "@testing-library/react";
import useUser from "../useUser";
import { loginUserDataMock } from "../../../mocks/user/userMocks";
import { tokenMock } from "../../../mocks/user/userMocks";

describe("Given a useUser custom hook with getToken function", () => {
  describe("When the function getToken is called with a username a and password", () => {
    test("Then it should return a token", async () => {
      const user = loginUserDataMock;
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const token = await getToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
