import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Layout from "./Layout";
import { isLoadingMock } from "../../mocks/ui/uiMocks";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Image with the alternative text 'Adro Osona logo with a dog footprint'", () => {
      const expectedAlternativeText = "Adro Osona logo with a dog footprint";

      renderWithProviders(wrapWithRouter(<Layout />));

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered but it's taking time to load the page", () => {
    test("Then it should show a Loader component", () => {
      const text = "loading";

      renderWithProviders(wrapWithRouter(<Layout />), { ui: isLoadingMock });

      const loader = screen.getByLabelText(text);

      expect(loader).toBeInTheDocument();
    });
  });
});
