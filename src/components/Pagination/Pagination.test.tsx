import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("when it's rendered", () => {
    test("Then it should show a 'Previous' button", () => {
      const previousButtonText = "Previous previous icon";

      renderWithProviders(<Pagination limit={1} totalAnimals={1} />);

      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });

      expect(previousButton).toBeInTheDocument();
    });

    test("Then it should show a 'Next' button", () => {
      const nextButtonText = "Next next icon";

      renderWithProviders(<Pagination limit={1} totalAnimals={1} />);

      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(nextButton).toBeInTheDocument();
    });
  });
});
