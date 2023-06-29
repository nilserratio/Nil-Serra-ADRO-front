import { screen, waitFor } from "@testing-library/react";
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
import { loadMoreHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";

describe("Given a AnimalsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'In adoption' inside a heading", () => {
      const headingText = "In adoption";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'Create' button", async () => {
      const createButtonText = "Add an animal add animal icon";

      renderWithProviders(wrapWithRouter(<AnimalsPage />), {
        user: userLoggedStateMock,
      });

      const createButton = screen.getByRole("button", {
        name: createButtonText,
      });

      expect(createButton).toBeInTheDocument();
    });

    test("Then it should show a 'Show more' button", async () => {
      const showMoreButtonText = "Show more";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const showMoreButton = screen.getByRole("button", {
        name: showMoreButtonText,
      });

      expect(showMoreButton).toBeInTheDocument();
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

  describe("When it's rendred and it's not with all the animals of the list loadeds", () => {
    test("Then it should show the button 'Show more' enabled", async () => {
      server.resetHandlers(...loadMoreHandlers);
      const showMoreButtonText = "Show more";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const showMoreButton = screen.getByRole("button", {
        name: showMoreButtonText,
      });

      expect(showMoreButton).toBeEnabled();
    });
  });

  describe("When it's rendred on the first page and the user clicks the 'Show more' button, loading all the animals on the list", () => {
    test("Then the button with the text 'Show more' should not be on the document", async () => {
      server.resetHandlers(...loadMoreHandlers);
      const showMoreButtonText = "Show more";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const showMoreButton = screen.getByRole("button", {
        name: showMoreButtonText,
      });

      await userEvent.click(showMoreButton);

      waitFor(() => {
        expect(showMoreButton).not.toBeInTheDocument();
      });
    });
  });
});
