import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import AnimalCard from "./AnimalCard";
import { tokenMock } from "../../mocks/user/userMocks";

describe("Given a AnimalCard component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered and recieve a 'Bella' dog in adoption information", () => {
    test("Then it should render a card with the text 'Bella' inside a heading", () => {
      const animalName = "Bella";

      renderWithProviders(
        wrapWithRouter(
          <AnimalCard
            actionOnClick={actionOnClick}
            animal={animalsMock[0]}
            isLazy="eager"
          />
        )
      );

      const cardHeading = screen.getByRole("heading", { name: animalName });

      expect(cardHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a logged user that owns the card, and the delete button is clicked", () => {
    const buttonText = "Delete";

    test("Then it should the delete button", () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimalCard
            actionOnClick={actionOnClick}
            animal={animalsMock[0]}
            isLazy="eager"
          />
        ),
        {
          user: {
            isLogged: true,
            id: "646fa090b926156009746913",
            token: tokenMock,
          },
        }
      );

      const deleteButton = screen.getByRole("button", { name: buttonText });

      expect(deleteButton).toBeInTheDocument();
    });

    test("Then it should call the action on click action", async () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimalCard
            actionOnClick={actionOnClick}
            animal={animalsMock[0]}
            isLazy="eager"
          />
        ),
        {
          user: {
            isLogged: true,
            id: "646fa090b926156009746913",
            token: tokenMock,
          },
        }
      );

      const deleteButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
