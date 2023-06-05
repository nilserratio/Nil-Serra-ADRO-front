import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { wrapper } from "../../../utils/testUtils/testUtils";

describe("Given a getAnimals fucntion", () => {
  describe("When it's called", () => {
    test("Then it should return a list on animals", async () => {
      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const animals = await getAnimals();

      const expectedAnimals = animalsMock;

      expect(animals).toStrictEqual(expectedAnimals);
    });
  });
});
