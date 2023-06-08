import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { vi } from "vitest";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a removeAnimals fucntion", () => {
  const id = animalsMock[0].id;

  describe("When it's called with an animal id", () => {
    test("Then it should show a feedback modal of succeed with the message 'You have successfully deleted this card from the adoption list.'", async () => {
      const expectedStatusCode = 200;

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await removeAnimal(id);

      expect(response).toBe(expectedStatusCode);
    });
  });

  describe("When it's called with an animal id but can't connet to the Api Rest", () => {
    test("Then it should show a error feedback with the message 'You have successfully deleted this card from the adoption list.'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await removeAnimal(id);

      expect(response).toBeUndefined();
    });
  });
});
