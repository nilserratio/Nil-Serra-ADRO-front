import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimalForm from "./AnimalForm";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import { vi } from "vitest";

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

const actionOnSubmit = vi.fn();

describe("Given a AnimalForm component", () => {
  const userText = "test text";
  const expectedText = "Create";

  animalFormLabels.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(
          <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
        );

        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      renderWithProviders(
        <AnimalForm buttonText={expectedText} actionOnSubmit={actionOnSubmit} />
      );

      const createButton = screen.getByRole("button", { name: expectedText });

      expect(createButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered but the inputs fields are empty", () => {
    test("Then it should show a disabled button with the text 'Create'", () => {
      renderWithProviders(
        <AnimalForm buttonText={expectedText} actionOnSubmit={actionOnSubmit} />
      );

      const createButton = screen.getByRole("button", { name: expectedText });

      expect(createButton).toBeDisabled();
    });
  });

  animalFormLabels.slice(4).forEach((expectedText) => {
    describe(`When it's rendered and the user writes the text '${userText}' on the field '${expectedText[0]}'`, () => {
      test(`Then it should show the text '${userText}' in the field`, async () => {
        renderWithProviders(
          <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
        );

        const textField = screen.getByLabelText(expectedText);

        await userEvent.type(textField, userText);

        expect(textField).toHaveValue(userText);
      });
    });
  });

  describe(`When it's rendered and the user writes the number '2020' option on the field '${animalFormLabels[4]}'`, () => {
    test(`Then it should show the number '2020' in the field`, async () => {
      const speciesNumber = "2020";

      renderWithProviders(
        <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const textField = screen.getByLabelText(animalFormLabels[4]);

      await userEvent.type(textField, speciesNumber);

      expect(textField).toHaveValue(speciesNumber);
    });
  });

  describe(`When it's rendered and the user selects the 'Dog' option on the field '${animalFormLabels[0]}'`, () => {
    test(`Then it should show the text 'Dog' in the field`, async () => {
      const speciesTextField = "Dogs";

      renderWithProviders(
        <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const textField = screen.getByLabelText(animalFormLabels[0]);

      await userEvent.selectOptions(textField, speciesTextField);

      expect(textField).toHaveValue(speciesTextField);
    });
  });

  describe(`When it's rendered and the user selects the 'Female' option on the field '${animalFormLabels[1]}'`, () => {
    test(`Then it should show the text 'Female' in the field`, async () => {
      const genderTextField = "Female";

      renderWithProviders(
        <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const textField = screen.getByLabelText(animalFormLabels[1]);

      await userEvent.selectOptions(textField, genderTextField);

      expect(textField).toHaveValue(genderTextField);
    });
  });

  describe(`When it's rendered and the user selects the 'Small Size' option on the field '${animalFormLabels[2]}'`, () => {
    test(`Then it should show the text 'Small Size' in the field`, async () => {
      const sizeTextField = "Small Size";

      renderWithProviders(
        <AnimalForm buttonText="" actionOnSubmit={actionOnSubmit} />
      );

      const textField = screen.getByLabelText(animalFormLabels[2]);

      await userEvent.selectOptions(textField, sizeTextField);

      expect(textField).toHaveValue(sizeTextField);
    });
  });

  describe("When it's rendered and all the inputs fields are filled in", () => {
    test("Then it should show an enabled button with the text 'Create'", async () => {
      renderWithProviders(
        <AnimalForm buttonText="Create" actionOnSubmit={actionOnSubmit} />
      );

      const speciesImputField = screen.getByLabelText(animalFormLabels[0]);
      const genderImputField = screen.getByLabelText(animalFormLabels[1]);
      const sizeImputField = screen.getByLabelText(animalFormLabels[2]);
      const yearOfBirthImputField = screen.getByLabelText(animalFormLabels[3]);
      const nameImputField = screen.getByLabelText(animalFormLabels[4]);
      const racesImputField = screen.getByLabelText(animalFormLabels[5]);
      const imageImputField = screen.getByLabelText(animalFormLabels[6]);
      const descriptionImputField = screen.getByLabelText(animalFormLabels[7]);

      const speciesTextField = "Dogs";
      await userEvent.selectOptions(speciesImputField, speciesTextField);
      const genderTextField = "Female";
      await userEvent.selectOptions(genderImputField, genderTextField);
      const sizeTextField = "Small Size";
      await userEvent.selectOptions(sizeImputField, sizeTextField);
      const speciesNumber = "2020";
      await userEvent.type(yearOfBirthImputField, speciesNumber);
      await userEvent.type(nameImputField, userText);
      await userEvent.type(racesImputField, userText);
      await userEvent.type(imageImputField, userText);
      await userEvent.type(descriptionImputField, userText);

      const createButton = screen.getByRole("button", { name: expectedText });

      expect(createButton).toBeEnabled();
    });
  });
});
