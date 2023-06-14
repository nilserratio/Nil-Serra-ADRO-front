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
  });

  describe("When it's rendered with an animal id", () => {
    test("Then it should show the text od the name of the animal inside a heading", async () => {
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
});
