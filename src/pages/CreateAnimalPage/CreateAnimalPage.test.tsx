import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateAnimalPage from "./CreateAnimalPage";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import { animalFormLabels } from "../../mocks/animals/animalsMocks";
import { store } from "../../store";
import { feedbackMessages } from "../../utils/responseData/responseData";

describe("Given a CreateAnimalPage page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Add Adoption' inside a heading", () => {
      const headingText = "Add Adoption";

      renderWithProviders(wrapWithRouter(<CreateAnimalPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and all the inputs fields are filled in and the user clicks the 'Create' button", () => {
    test("Then it should show the new animal created on the home page", async () => {
      const userText = "test text";
      const createButtonText = "Create";
      const expectedFeedbackMessage = feedbackMessages.createOk;

      renderWithProviders(wrapWithRouter(<CreateAnimalPage />));

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

      const createButton = screen.getByRole("button", {
        name: createButtonText,
      });

      await userEvent.click(createButton);

      const feedbackMessage = await store.getState().ui.message;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });
});
