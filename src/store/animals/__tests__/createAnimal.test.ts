import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { animalsReducer, createAnimalActionCreator } from "../animalsSlice";
import { AnimalsStateStructure } from "../types";

describe("Given a createAnimal reducer", () => {
  describe("When it recieves a list of animals and a new animal data", () => {
    test("Then it should return a new state of the list with the new animal created", () => {
      const currentAnimalsState: AnimalsStateStructure = {
        animals: [animalsMock[0]],
      };

      const newAnimalState: AnimalsStateStructure = animalsReducer(
        currentAnimalsState,
        createAnimalActionCreator(animalsMock[1])
      );

      expect(newAnimalState).toStrictEqual({ animals: animalsMock });
    });
  });
});
