import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import AnimalsList from "./AnimalsList";
import { animalsMock } from "../../mocks/animals/animalsMocks";

describe("Given an AnimalsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an unordered list of card with the aria-label text 'list of animals in adoption'", () => {
      const text = "list of animals in adoption";

      renderWithProviders(<AnimalsList />);

      const listText = screen.getByLabelText(text);

      expect(listText).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of 2 animals", () => {
    test("Then it should the text 'Bella' inside a heading", () => {
      const animalsList = animalsMock;
      const animalName = animalsMock[0].name;

      renderWithProviders(<AnimalsList />, {
        animals: { animals: animalsList },
      });

      const heading = screen.getByRole("heading", { name: animalName });

      expect(heading).toBeInTheDocument();
    });
  });
});
