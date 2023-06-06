import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";
import { paths } from "../../utils/paths/paths";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show '404 - Something went wrong...' inside a heading", () => {
      const headingText = "404 - Something went wrong...";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'Back to Homepage' button", () => {
    test("Then it should redirects him to the '/home' path", async () => {
      const buttonText = "Back to Homepage";

      const route: RouteObject[] = [
        {
          path: paths.notFound,
          element: <NotFoundPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
