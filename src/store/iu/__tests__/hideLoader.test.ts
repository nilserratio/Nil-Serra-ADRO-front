import { UiStructure } from "../types";
import { hideLoaderActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideLoading reducer", () => {
  describe("When it recieve an Ui state and a hide loading action", () => {
    test("Then it should toggle the isLoading Ui state to false", () => {
      const currentState: UiStructure = {
        isLoading: true,
        isError: false,
        message: "",
        showFeedback: false,
      };
      const expectedState: UiStructure = {
        isLoading: false,
        showFeedback: false,
        isError: false,
        message: "",
      };

      const UiState = uiReducer(currentState, hideLoaderActionCreator());

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
