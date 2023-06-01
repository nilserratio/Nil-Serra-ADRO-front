import { renderHook } from "@testing-library/react";
import { decodedTokenMock, tokenMock } from "../../../mocks/user/userMocks";
import useToken from "../useToken";

describe("Given a useToken custom hook with decodeToken function", () => {
  describe("When the function decodeToken its calledwith a token", () => {
    test("Then it should return the user data with an id and the token as srting", () => {
      const userToken = tokenMock;
      const decodedDataToken = decodedTokenMock;

      const {
        result: {
          current: { decodeToken },
        },
      } = renderHook(() => useToken());

      const userTokenData = decodeToken(userToken);

      expect(userTokenData).toStrictEqual(decodedDataToken);
    });
  });
});
