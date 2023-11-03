import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import HomePage from "./HomePage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../utils/paths/paths";
import AnimalsPage from "../AnimalsPage/AnimalsPage";
import userEvent from "@testing-library/user-event";

describe("Given a HomePage component", () => {
  const linkText = "See full adoption list";

  describe("When rendered", () => {
    test("Then it should show 'In adoption' inside a heading", () => {
      const headingText = "In adoption";

      renderWithProviders(wrapWithRouter(<HomePage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'See full adoption list' button", async () => {
      renderWithProviders(wrapWithRouter(<HomePage />));

      const listButton = screen.getByRole("link", {
        name: linkText,
      });

      expect(listButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks the 'See full adoption list' button", () => {
    test("Then it should redirects to the animals in adoption list page", async () => {
      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <HomePage />,
        },
        {
          path: paths.animals,
          element: <AnimalsPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const createButton = screen.getByRole("link", {
        name: linkText,
      });

      await userEvent.click(createButton);

      expect(router.state.location.pathname).toStrictEqual(paths.animals);
    });
  });
});
