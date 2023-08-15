import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { animalsReducer, loadMoreAnimalsActionCreator } from "../animalsSlice";
import { AnimalsStateStructure } from "../types";

describe("Given a loadMoreAnimals reducer", () => {
  describe("When it recieves a list of animals and a loadMoreAnimals action", () => {
    test("Then it should return a new state of the limit property with 6 more", () => {
      const expetedAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
        limit: 12,
        totalAnimals: 12,
      };

      const currentAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
        limit: 6,
        totalAnimals: 12,
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        loadMoreAnimalsActionCreator()
      );

      expect(newAnimalState.limit).toStrictEqual(expetedAnimalsState.limit);
    });
  });
});
