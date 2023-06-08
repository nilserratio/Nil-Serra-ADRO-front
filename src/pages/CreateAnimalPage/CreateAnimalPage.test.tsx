import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import CreateAnimalPage from "./CreateAnimalPage";

describe("Given a CreateAnimalPage page component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Add Adoption' inside a heading", () => {
      const headingText = "Add Adoption";

      renderWithProviders(wrapWithRouter(<CreateAnimalPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
