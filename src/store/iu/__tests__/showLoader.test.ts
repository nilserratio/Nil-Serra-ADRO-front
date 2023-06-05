import { UiStructure } from "../types";
import { showLoaderActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it recieve an Ui state and a show loading action", () => {
    test("Then it should toggle the isLoading Ui state to true", () => {
      const currentState: UiStructure = { isLoading: false };
      const expectedState: UiStructure = { isLoading: true };

      const UiState = uiReducer(currentState, showLoaderActionCreator());

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
