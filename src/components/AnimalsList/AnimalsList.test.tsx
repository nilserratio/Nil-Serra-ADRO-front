import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalsList from "./AnimalsList";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import { tokenMock, userLoggedStateMock } from "../../mocks/user/userMocks";
import { paths } from "../../utils/paths/paths";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import CreateAnimalPage from "../../pages/CreateAnimalPage/CreateAnimalPage";
import AnimalsPage from "../../pages/AnimalsPage/AnimalsPage";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given an AnimalsList component", () => {
  const animalsList = animalsMock;
  const animalName = animalsMock[0].name;

  describe("When it's rendered", () => {
    test("Then it should show an unordered list of card with the aria-label text 'list of animals in adoption'", () => {
      const text = "list of animals in adoption";

      renderWithProviders(wrapWithRouter(<AnimalsList />));

      const listText = screen.getByLabelText(text);

      expect(listText).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of 2 animals", () => {
    test("Then it should have the text 'Bella' inside a heading", () => {
      renderWithProviders(wrapWithRouter(<AnimalsList />), {
        animals: { animals: animalsList },
      });

      const heading = screen.getByRole("heading", { name: animalName });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of 2 animals and the user clicks the delete button of it's own card", () => {
    test("Then it should a list without the deleted animal", async () => {
      const buttonText = "Delete";

      renderWithProviders(wrapWithRouter(<AnimalsList />), {
        user: {
          isLogged: true,
          id: "646fa090b926156009746913",
          token: tokenMock,
        },
        animals: { animals: animalsList },
      });

      const heading = screen.getByRole("heading", { name: animalName });
      const deleteButton = screen.getAllByRole("button", { name: buttonText });

      await userEvent.click(deleteButton[0]);

      expect(heading).not.toBeInTheDocument();
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
