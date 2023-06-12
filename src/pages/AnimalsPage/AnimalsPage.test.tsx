import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalsPage from "./AnimalsPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../utils/paths/paths";
import CreateAnimalPage from "../CreateAnimalPage/CreateAnimalPage";
import { userLoggedStateMock } from "../../mocks/user/userMocks";

describe("Given a AnimalsPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'In adoption' inside a heading", () => {
      const headingText = "In adoption";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a logged user and the user clicks the 'Add an animal' button", () => {
    test("Then it should redirects to the create page", async () => {
      const buttonText = "Add an animal add animal icon";

      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <AnimalsPage />,
        },
        {
          path: paths.create,
          element: <CreateAnimalPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: userLoggedStateMock,
      });

      const createButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(createButton);

      expect(router.state.location.pathname).toStrictEqual(paths.create);
    });
  });
});
