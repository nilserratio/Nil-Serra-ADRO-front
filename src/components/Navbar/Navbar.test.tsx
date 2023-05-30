import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When its rendered", () => {
    test("Then it should show the navigation link 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<Navbar />);

      const navLinkHome = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(navLinkHome).toBeInTheDocument();
    });
  });
});
