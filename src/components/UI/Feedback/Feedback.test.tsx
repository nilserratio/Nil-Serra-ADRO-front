import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../utils/testUtils/testUtils";
import Feedback from "./Feedback";
import { store } from "../../../store";

describe("Given a Feedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a feedback modal", () => {
      const text = "feedback modal";

      renderWithProviders(<Feedback />);

      const modal = screen.getByLabelText(text);

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When it's rendered as an feedback error", () => {
    test("Then it should show a feedback modal error with a warning image with the text 'error icon'", () => {
      const imageAltText = "error icon";

      renderWithProviders(<Feedback />, { ui: { isError: true } });

      const modalImage = screen.getByAltText(imageAltText);

      expect(modalImage).toBeInTheDocument();
    });
  });

  describe("When it's rendered as an feedback error and the user click anywhere", () => {
    test("Then it should hide the feedback modal error", async () => {
      const buttonText = "Accept";

      renderWithProviders(<Feedback />, { ui: { isError: true } });

      const modalButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(modalButton);

      const storeStates = store.getState();

      expect(storeStates.ui.showFeedback).toBeFalsy();
    });
  });
});
