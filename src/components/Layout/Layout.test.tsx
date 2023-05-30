import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Image with the alternative text 'Adro Osona logo'", () => {
      const expectedAlternativeText = "Adro Osona logo";

      renderWithProviders(<Layout />);

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });
});
