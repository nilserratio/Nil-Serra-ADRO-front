import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { animalsMock } from "../../../mocks/animals/animalsMocks";

describe("Given a getAnimals fucntion", () => {
  describe("When it's called", () => {
    test("Then it should return a list on animals", async () => {
      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals());

      const animals = await getAnimals();

      const expectedAnimals = animalsMock;

      expect(animals).toStrictEqual(expectedAnimals);
    });
  });
});
