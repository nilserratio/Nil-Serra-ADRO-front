import { FeedbackPayloadStructure, UiStructure } from "../types";
import { showFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a showFeedback reducer", () => {
  describe("When it recieve an Ui state and a show feedback action", () => {
    test("Then it should toggle the showFeedback Ui state to true", () => {
      const currentState: UiStructure = {
        showFeedback: false,
        isError: false,
        message: "",
        isLoading: false,
      };

      const expectedState: UiStructure = {
        showFeedback: true,
        isError: true,
        message: "Test showFeedback error",
        isLoading: false,
      };

      const payload: FeedbackPayloadStructure = {
        isError: true,
        message: "Test showFeedback error",
      };
      const UiState = uiReducer(
        currentState,
        showFeedbackActionCreator(payload)
      );

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
