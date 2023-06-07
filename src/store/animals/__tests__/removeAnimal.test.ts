import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { animalsReducer, removeAnimalActionCreator } from "../animalsSlice";
import { AnimalsStateStructure } from "../types";

describe("Given a removeAnimal reducer", () => {
  describe("When it recieves an animal id with a current state of a list of 2 animals", () => {
    test("Then it should return a new state of the list with 1 animal", () => {
      const expetedAnimalsState: AnimalsStateStructure = {
        animals: animalsMock.slice(1),
      };

      const currentAnimalsState: AnimalsStateStructure = {
        animals: animalsMock,
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        removeAnimalActionCreator(animalsMock[0].id)
      );

      expect(newAnimalState).toStrictEqual(expetedAnimalsState);
    });
  });
});
