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
import LoginPage from "../../pages/LoginPage/LoginPage";

describe("Given a Navbar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a burger menu button", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const burgerMenuButton = screen.getByRole("button");

      expect(burgerMenuButton).toBeInTheDocument();
    });
  });

  describe("When the burger menu is open", () => {
    test("Then it can be closed by the user clicking outside or to a menu item. Then Home link should not be visible", async () => {
      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <App />,
        },
        {
          path: paths.login,
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(route, {
        initialEntries: ["/"],
        initialIndex: 0,
      });

      renderWithProviders(<RouterProvider router={router} />);

      const burgerMenuButton = screen.getByRole("button");

      await userEvent.click(burgerMenuButton);

      const homelink = screen.getByRole("link", { name: "Home" });

      await userEvent.click(homelink);

      expect(homelink).not.toBeVisible();
    });
  });

  describe("When its rendered and the user is not logged in and burger menu button is clicked", () => {
    test("Then it should show a link Home", async () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const burgerMenuButton = screen.getByRole("button");

      await userEvent.click(burgerMenuButton);

      const homelink = screen.getByRole("link", { name: "Home" });

      expect(homelink).toBeInTheDocument();
    });

    test("Then it should show a link Home", async () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const burgerMenuButton = screen.getByRole("button");

      await userEvent.click(burgerMenuButton);

      const loginlink = screen.getByRole("link", { name: "Sign in" });

      expect(loginlink).toBeInTheDocument();
    });
  });

  describe("When its rendered and the user is logged in", () => {
    test("Then it should show Home link", () => {
      renderWithProviders(wrapWithRouter(<Navbar />), {
        user: userLoggedStateMock,
      });

      const homelink = screen.getByText("Home");

      expect(homelink).toBeInTheDocument();
    });

    test("Then it should show Sign out button", () => {
      renderWithProviders(wrapWithRouter(<Navbar />), {
        user: userLoggedStateMock,
      });

      const logoutButton = screen.getByText("Sign out");

      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When its rendered and the user is logged and clicks the 'Sing out' button", () => {
    test("Then it should logout the user show Sign in link and hide Sign out button", async () => {
      const buttonText = "Sign out";

      renderWithProviders(wrapWithRouter(<Navbar />), {
        user: userLoggedStateMock,
      });

      const logoutButton = screen.getByText(buttonText);
      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });
});
