import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When its rendered", () => {
    test("Then it should show the navigation link 'home'", () => {
      const expectedLinkText = "home";

      renderWithProviders(<Navbar />);

      const NavLinkHome = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(NavLinkHome).toBeInTheDocument();
    });
  });
});
