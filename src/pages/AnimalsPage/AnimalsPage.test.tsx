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
import { paginationHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { vi } from "vitest";

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

    test("Then it should show a 'Previous' button", async () => {
      const previousButtonText = "Previous previous icon";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });

      expect(previousButton).toBeInTheDocument();
    });

    test("Then it should show a 'Next' button", async () => {
      const nextButtonText = "Next next icon";

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(nextButton).toBeInTheDocument();
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

  describe("When it's rendred on the first page and the user doesn't clicks any pagination button", () => {
    test("Then it should show the button 'Previous' disabled", async () => {
      server.resetHandlers(...paginationHandlers);
      const previousButtonText = "Previous previous icon";

      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });

      expect(previousButton).toBeDisabled();
    });

    test("Then it should show the button 'Next' enabled", async () => {
      server.resetHandlers(...paginationHandlers);
      const nextButtonText = "Next next icon";

      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(nextButton).toBeEnabled();
    });
  });

  describe("When it's rendred on the first page and the user clicks the 'Next' button", () => {
    test("Then it should show the button 'Next' disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      const nextButtonText = "Next next icon";

      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const nextButton = await screen.findByRole("button", {
        name: nextButtonText,
      });

      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeDisabled();
      });
    });

    test("Then it should show the button 'Previous' enabled", async () => {
      server.resetHandlers(...paginationHandlers);

      const previousButtonText = "Previous previous icon";

      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      renderWithProviders(wrapWithRouter(<AnimalsPage />));

      const nextButtonText = "Next next icon";
      const nextButton = await screen.findByRole("button", {
        name: nextButtonText,
      });

      await userEvent.click(nextButton);

      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });

      await userEvent.click(previousButton);

      waitFor(() => {
        expect(previousButton).toBeEnabled();
      });
    });
  });
});
