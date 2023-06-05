import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils/testUtils";
import Feedback from "./Feedback";

describe("Given a Feedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a feedback modal", () => {
      const text = "feedback modal";

      renderWithProviders(<Feedback />);

      const modal = screen.getByLabelText(text);

      expect(modal).toBeInTheDocument();
    });
  });
});
