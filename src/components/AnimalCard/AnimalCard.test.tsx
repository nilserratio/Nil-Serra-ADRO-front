import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import AnimalCard from "./AnimalCard";
import { tokenMock } from "../../mocks/user/userMocks";

describe("Given a AnimalCard component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered and recieve a 'Bella' dog in adoption information", () => {
    test("Then it should render a card with the text 'Bella' inside a heading", () => {
      const animalName = "Bella";

      renderWithProviders(
        <AnimalCard
          actionOnClick={actionOnClick}
          animal={animalsMock[0]}
          isLazy="eager"
        />
      );

      const cardHeading = screen.getByRole("heading", { name: animalName });

      expect(cardHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the delete button is clicked", () => {
    const buttonAriaLabel = "button to delete an animal card";

    test("Then it should the delete button", () => {
      renderWithProviders(
        <AnimalCard
          actionOnClick={actionOnClick}
          animal={animalsMock[0]}
          isLazy="eager"
        />,
        {
          user: {
            isLogged: true,
            id: "646fa090b926156009746913",
            token: tokenMock,
          },
        }
      );

      const deleteButton = screen.getByLabelText(buttonAriaLabel);

      expect(deleteButton).toBeInTheDocument();
    });

    test("Then it should call the action on click action", async () => {
      renderWithProviders(
        <AnimalCard
          actionOnClick={actionOnClick}
          animal={animalsMock[0]}
          isLazy="eager"
        />,
        {
          user: {
            isLogged: true,
            id: "646fa090b926156009746913",
            token: tokenMock,
          },
        }
      );

      const deleteButton = screen.getByLabelText(buttonAriaLabel);

      await userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
