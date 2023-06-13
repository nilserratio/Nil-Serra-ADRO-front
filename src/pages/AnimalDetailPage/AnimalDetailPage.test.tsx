import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import AnimalDetailPage from "./AnimalDetailPage";

describe("Given a AnimalsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'In adoption' inside a heading", () => {
      const headingText = "Adopt me!";

      renderWithProviders(<AnimalDetailPage />);

      const button = screen.getByRole("button", {
        name: headingText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
