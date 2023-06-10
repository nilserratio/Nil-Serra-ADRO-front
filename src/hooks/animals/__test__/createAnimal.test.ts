import { renderHook } from "@testing-library/react";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a createAnimals fucntion", () => {
  describe("When it's called with a new animal data like a dog 'Bella'", () => {
    test("Then it should return the card of the new animal 'Bella'", async () => {
      const expectedNewAnimal = animalsMock[0];

      const {
        result: {
          current: { createAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await createAnimal(animalsMock[0]);

      expect(response).toStrictEqual(expectedNewAnimal);
    });
  });

  describe("When it's called but can't create the new animal", () => {
    test("Then it should return the card of the new animal 'Bella'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { createAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await createAnimal(animalsMock[0]);

      expect(response).toBeUndefined();
    });
  });
});
