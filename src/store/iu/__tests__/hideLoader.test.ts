import { UiStructure } from "../types";
import { hideLoaderActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideLoading reducer", () => {
  describe("When it recieve an Ui state and a hide loading action", () => {
    test("Then it should toggle the isLoading Ui state to false", () => {
      const currentState: UiStructure = { isLoading: true };
      const expectedState: UiStructure = { isLoading: false };

      const UiState = uiReducer(currentState, hideLoaderActionCreator());

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
