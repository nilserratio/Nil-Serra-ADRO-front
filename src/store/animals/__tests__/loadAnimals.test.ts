import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { animalsReducer, loadAnimalsActionCreator } from "../animalsSlice";
import { AnimalsStateStructure } from "../types";

describe("Given a loadAnimals reducer", () => {
  describe("When it recieves an empty list of animals and a loadAnimals action with 2 animals", () => {
    test("Then it should return a new state with the 2 animals", () => {
      const expetedAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
        limit: 6,
      };

      const currentAnimalsState: AnimalsStateStructure = {
        animals: [],
        limit: 6,
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        loadAnimalsActionCreator(animalsMock)
      );

      expect(newAnimalState).toStrictEqual(expetedAnimalsState);
    });
  });
});
