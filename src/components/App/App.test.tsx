import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import App from "./App";
import { tokenMock } from "../../mocks/user/userMocks";

localStorage.setItem("token", tokenMock);

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it shouls show the ADRO Osona logo with the alt text 'Adro Osona logo with a dog footprint'", () => {
      const altText = "Adro Osona logo with a dog footprint";

      renderWithProviders(wrapWithRouter(<App />));

      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a logged user", () => {
    test("Then it shouls show the button with the text 'Sign out'", () => {
      const buttonText = "Sign out";

      renderWithProviders(wrapWithRouter(<App />), {
        user: {
          id: "",
          isLogged: true,
          token: tokenMock,
        },
      });

      const signOutButton = screen.getByText(buttonText);

      expect(signOutButton).toBeInTheDocument();
    });
  });
});
