import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import AnimalsList from "./AnimalsList";

describe("Given an AnimalsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an unordered list of card with the aria-label text 'list of animals in adoption'", () => {
      const text = "list of animals in adoption";

      renderWithProviders(<AnimalsList animals={[]} />);

      const listText = screen.getByLabelText(text);

      expect(listText).toBeInTheDocument();
    });
  });
});
