import { screen } from "@testing-library/react";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import AnimalCard from "./AnimalCard";

describe("Given a AnimalCard component", () => {
  describe("When it's rendered and recieve a 'Bella' dog in adoption information", () => {
    test("Then it should render a card with the text 'Bella' inside a heading", () => {
      const animalName = "Bella";

      renderWithProviders(<AnimalCard animal={animalsMock[0]} />);

      const cardHeading = screen.getByRole("heading", { name: animalName });

      expect(cardHeading).toBeInTheDocument();
    });
  });
});
