import { screen, waitFor } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalDetailPage from "./AnimalDetailPage";
import { store } from "../../store";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { LazyAnimalDetailPage } from "../../routers/LazyPages";
import { vi } from "vitest";
import { paths } from "../../utils/paths/paths";
import AnimalsPage from "../AnimalsPage/AnimalsPage";
import userEvent from "@testing-library/user-event";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a AnimalsPage component", () => {
  describe("When it's rendered with an animal id", () => {
    test("Then it should show the text 'Adopt me!' inside a link", () => {
      renderWithProviders(wrapWithRouter(<AnimalDetailPage />));

      const linkText = "Adopt me!";

      const detailLink = screen.getByRole("link", {
        name: linkText,
      });

      expect(detailLink).toBeInTheDocument();
    });

    test("Then it should show the text on the name of the animal inside a heading", async () => {
      const route: RouteObject[] = [
        {
          path: paths.animalById,
          element: <LazyAnimalDetailPage />,
        },
      ];

      const idAnimal = store.getState().animals.animalById?.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/${idAnimal}`],
      });

      renderWithProviders(<RouterProvider router={router} />);

      const animalName = store.getState().animals.animalById?.name;

      const detailHeading = await waitFor(() =>
        screen.getByRole("heading", {
          name: animalName,
        })
      );

      expect(detailHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks the 'Back to Adoption List'", () => {
    test("Then it should redirect the user to the adoption list page", async () => {
      const buttonText = "Back to Adoption List";

      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <AnimalDetailPage />,
        },
        {
          path: paths.animals,
          element: <AnimalsPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(router.state.location.pathname).toStrictEqual(paths.animals);
    });
  });
});
