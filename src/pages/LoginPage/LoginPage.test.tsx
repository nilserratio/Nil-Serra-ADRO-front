import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Sign in' inside a heading", () => {
      const headingText = "Sign in";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
