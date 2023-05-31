import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Image with the alternative text 'Adro Osona logo with a dog footprint'", () => {
      const expectedAlternativeText = "Adro Osona logo with a dog footprint";

      renderWithProviders(<Layout />);

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });
});
