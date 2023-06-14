import { UiStructure } from "../types";
import { hideFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideFeedback reducer", () => {
  describe("When it recieve an Ui state and a hide feedback action", () => {
    test("Then it should toggle the showFeedback Ui state to false", () => {
      const currentState: UiStructure = {
        showFeedback: true,
        isError: true,
        message: "Test showFeedback error",
        isLoading: false,
      };

      const expectedState: UiStructure = {
        isLoading: false,
        showFeedback: false,
        isError: false,
        message: "",
      };

      const UiState = uiReducer(currentState, hideFeedbackActionCreator());

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
