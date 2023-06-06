import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show '404 - Something went wrong...' inside a heading", () => {
      const headingText = "404 - Something went wrong...";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
