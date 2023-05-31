import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";
import { tokenMock } from "../../../mocks/user/userMocks";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook with removeToken function", () => {
  describe("When the function removeToken is called with a 'token' key", () => {
    test("Then it should remove the token saved in the local storage of the browser", () => {
      const key = "token";
      const value = tokenMock;
      const expectedLocalStorageLengh = 0;

      const {
        result: {
          current: { setToken, removeToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      removeToken(key);

      expect(localStorage.length).toBe(expectedLocalStorageLengh);
    });
  });
});
