import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/testUtils/testUtils";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it shouls show the ADRO Osona logo with the alt text 'Adro Osona logo with a dog footprint'", () => {
      const altText = "Adro Osona logo with a dog footprint";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
