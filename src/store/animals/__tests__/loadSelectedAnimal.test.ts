import { animalsMock } from "../../../mocks/animals/animalsMocks";
import {
  animalsReducer,
  loadSelectedAnimalActionCreator,
} from "../animalsSlice";
import { AnimalsStateStructure } from "../types";

describe("Given a loadSelectedAnimals reducer", () => {
  describe("When it recieves a list of animals and a loadSelectedAnimals action with an id as a payload", () => {
    test("Then it should return the animal id and the animals list", () => {
      const expetedAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
        animalId: animalsMock[0].id,
      };

      const currentAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        loadSelectedAnimalActionCreator(animalsMock[0].id as string)
      );

      expect(newAnimalState).toStrictEqual(expetedAnimalsState);
    });
  });
});
