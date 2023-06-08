import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimalForm from "./AnimalForm";
import { renderWithProviders } from "../../utils/testUtils/testUtils";

const animalFormLabels = [
  "Species",
  "Gender",
  "Size",
  "Year of Birth",
  "Name",
  "Races",
  "Image URL",
  "Description",
];

const userText = "test text";

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

  animalFormLabels.slice(4).forEach((expectedText) => {
    describe(`When it's rendered and the user writes the text '${userText}' on the field '${expectedText[0]}'`, () => {
      test(`Then it should show the text '${userText}' in the field`, async () => {
        renderWithProviders(<AnimalForm buttonText="" />);

        const textField = screen.getByLabelText(expectedText);

        await userEvent.type(textField, userText);

        expect(textField).toHaveValue(userText);
      });
    });
  });

  describe(`When it's rendered and the user writes the number '2020' option on the field '${animalFormLabels[4]}'`, () => {
    test(`Then it should show the number '2020' in the field`, async () => {
      const speciesNumber = "2020";

      renderWithProviders(<AnimalForm buttonText="" />);

      const textField = screen.getByLabelText(animalFormLabels[4]);

      await userEvent.type(textField, speciesNumber);

      expect(textField).toHaveValue(speciesNumber);
    });
  });

  describe(`When it's rendered and the user selects the 'Dog' option on the field '${animalFormLabels[0]}'`, () => {
    test(`Then it should show the text 'Dog' in the field`, async () => {
      const speciesTextField = "Dogs";

      renderWithProviders(<AnimalForm buttonText="" />);

      const textField = screen.getByLabelText(animalFormLabels[0]);

      await userEvent.selectOptions(textField, speciesTextField);

      expect(textField).toHaveValue(speciesTextField);
    });
  });

  describe(`When it's rendered and the user selects the 'Female' option on the field '${animalFormLabels[1]}'`, () => {
    test(`Then it should show the text 'Female' in the field`, async () => {
      const speciesTextField = "Female";

      renderWithProviders(<AnimalForm buttonText="" />);

      const textField = screen.getByLabelText(animalFormLabels[1]);

      await userEvent.selectOptions(textField, speciesTextField);

      expect(textField).toHaveValue(speciesTextField);
    });
  });

  describe(`When it's rendered and the user selects the 'Small Size' option on the field '${animalFormLabels[2]}'`, () => {
    test(`Then it should show the text 'Small Size' in the field`, async () => {
      const speciesTextField = "Small Size";

      renderWithProviders(<AnimalForm buttonText="" />);

      const textField = screen.getByLabelText(animalFormLabels[2]);

      await userEvent.selectOptions(textField, speciesTextField);

      expect(textField).toHaveValue(speciesTextField);
    });
  });
});
