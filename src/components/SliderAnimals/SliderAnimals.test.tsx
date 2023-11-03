import { screen } from "@testing-library/react";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import SliderAnimals from "./SliderAnimals";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../utils/paths/paths";
import HomePage from "../../pages/HomePage/HomePage";
import AnimalsPage from "../../pages/AnimalsPage/AnimalsPage";
import userEvent from "@testing-library/user-event";

describe("Given a SliderAnimals component", () => {
  const linkText = `Meet ${animalsMock[0].name}`;

  describe("when it's rendered with a list of animals", () => {
    test("Then it should show the image of the first animal on the list", () => {
      const alternativeText = `A ${animalsMock[0].species} with name ${animalsMock[0].name}`;

      renderWithProviders(
        wrapWithRouter(<SliderAnimals animals={animalsMock} />)
      );

      const animalImage = screen.getByAltText(alternativeText);

      expect(animalImage).toBeInTheDocument();
    });

    test("Then it should show a link with the text 'Meet Bella'", () => {
      renderWithProviders(
        wrapWithRouter(<SliderAnimals animals={animalsMock} />)
      );

      const animalLink = screen.getByRole("link", {
        name: linkText,
      });

      expect(animalLink).toBeInTheDocument();
    });
  });

  describe("when it's rendered with a list of animals and the user cicks the link with the text 'Meet Bella'", () => {
    test("Then it should redirects to the animals list page", async () => {
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

      renderWithProviders(<RouterProvider router={router} />, {
        animals: {
          animals: animalsMock,
          limit: 6,
          totalAnimals: animalsMock.length,
        },
      });

      const animalLink = screen.getByRole("link", {
        name: linkText,
      });

      await userEvent.click(animalLink);

      expect(router.state.location.pathname).toStrictEqual(paths.root);
    });
  });
});
