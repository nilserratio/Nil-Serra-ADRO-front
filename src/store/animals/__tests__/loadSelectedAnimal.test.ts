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
        animalById: animalsMock[0],
        limit: 6,
      };

      const currentAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
        limit: 6,
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        loadSelectedAnimalActionCreator(animalsMock[0])
      );

      expect(newAnimalState).toStrictEqual(expetedAnimalsState);
    });
  });
});
