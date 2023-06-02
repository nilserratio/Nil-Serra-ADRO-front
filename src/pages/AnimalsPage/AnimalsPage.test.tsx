import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalsPage from "./AnimalsPage";

describe("Given a AnimalsPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'In adoption' inside a heading", () => {
      const headingText = "In adoption";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
