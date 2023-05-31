import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../../mocks/user/userMocks";
import useLocalStorage from "../useLocalStorage";

describe("Given a useLocalStorage custom hook with setToken function", () => {
  describe("When the function setToken is called with a key 'token' and the value", () => {
    test("Then it should save the token in the local storage", () => {
      const key = "token";
      const value = tokenMock;

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});
