import { screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";
import { renderWithProviders } from "../../utils/testUtils/testUtils";

const animalFormLabels = [
  "Name",
  "Species",
  "Races",
  "Gender",
  "Size",
  "Year of Birth",
  "Image URL",
  "Description",
];

describe("Given a AnimalForm component", () => {
  animalFormLabels.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<AnimalForm buttonText="" />);

        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<AnimalForm buttonText={expectedText} />);

      const textField = screen.getByRole("button", { name: expectedText });

      expect(textField).toBeInTheDocument();
    });
  });
});
