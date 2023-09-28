import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import BurgerMenu from "./BurgerMenu";

describe("Given a BurgerMenu component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the BurguerMenu component", () => {
      renderWithProviders(<BurgerMenu />);

      const navigation = screen.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
  });
});
