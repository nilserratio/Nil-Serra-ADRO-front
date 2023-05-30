import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture with an alternative text that says 'Adro Osona logo'", () => {
      const expectedAlternativeText = "Adro Osona logo";

      renderWithProviders(<Header />);

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });
});
