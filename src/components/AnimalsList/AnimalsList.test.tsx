import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalsList from "./AnimalsList";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import { tokenMock } from "../../mocks/user/userMocks";

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
        animals: {
          animals: animalsList,
        },
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
        animals: {
          animals: animalsList,
        },
      });

      const heading = screen.getByRole("heading", { name: animalName });
      const deleteButton = screen.getAllByRole("button", { name: buttonText });

      await userEvent.click(deleteButton[0]);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
