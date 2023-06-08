import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Header from "./Header";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../utils/paths/paths";
import AnimalsPage from "../../pages/AnimalsPage/AnimalsPage";
import App from "../App/App";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture with an alternative text that says 'Adro Osona logo with a dog footprint'", () => {
      const expectedAlternativeText = "Adro Osona logo with a dog footprint";

      renderWithProviders(wrapWithRouter(<Header />));

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks the ADRO logo", () => {
    test("Then it should redirect the user to the home page", async () => {
      const altAdroLogo = "Adro Osona logo with a dog footprint";

      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <App />,
        },
        {
          path: paths.home,
          element: <AnimalsPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const adroLogo = screen.getByAltText(altAdroLogo);
      await userEvent.click(adroLogo);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
