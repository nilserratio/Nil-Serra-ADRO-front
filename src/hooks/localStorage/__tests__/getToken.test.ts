import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";
import { tokenMock } from "../../../mocks/user/userMocks";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook with getToken function", () => {
  describe("When the function getToken is called with a 'token' key", () => {
    test("Then it should return the token saved in the local storage of the browser", () => {
      const key = "token";
      const value = tokenMock;

      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      const expectedToken = getToken(key);

      expect(tokenMock).toStrictEqual(expectedToken);
    });
  });
});
