import { screen } from "@testing-library/react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import { paths } from "../../utils/paths/paths";
import App from "../App/App";
import { userLoggedStateMock } from "../../mocks/user/userMocks";

describe("Given a Navbar component", () => {
  describe("When its rendered", () => {
    test("Then it should show the navigation link 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const navLinkHome = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(navLinkHome).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks the 'Sing out' button", () => {
    test("Then it should logout the user and redirects him to the '/login' path", async () => {
      const buttonText = "Sign out";

      const route: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: userLoggedStateMock,
      });

      const logoutButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(logoutButton);

      expect(router.state.location.pathname).toStrictEqual(paths.login);
    });
  });
});
