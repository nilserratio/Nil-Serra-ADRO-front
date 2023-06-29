import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import LoadMore from "./LoadMore";
import { vi } from "vitest";

describe("Given a LoadMore component", () => {
  describe("when it's rendered", () => {
    const limit = 6;
    const totalAnimals = 12;

    const loadMoreOnClick = vi.fn();

    test("Then it should show a 'Show more' button", () => {
      const showMoreButtonText = "Show more";

      renderWithProviders(
        <LoadMore
          limit={limit}
          totalAnimals={totalAnimals}
          loadMoreOnClick={loadMoreOnClick}
        />
      );

      const showMoreButton = screen.getByRole("button", {
        name: showMoreButtonText,
      });

      expect(showMoreButton).toBeInTheDocument();
    });

    test("Then it should show a text 'Showing 6 of 12' inside a label", () => {
      const labelText = `Showing ${limit} of ${totalAnimals}`;

      renderWithProviders(
        <LoadMore
          limit={limit}
          totalAnimals={totalAnimals}
          loadMoreOnClick={loadMoreOnClick}
        />
      );

      const label = screen.getByLabelText(labelText);

      expect(label).toBeInTheDocument();
    });
  });
});
