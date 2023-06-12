import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

const skip = 1;
const limit = 10;

describe("Given a getAnimals fucntion", () => {
  describe("When it's called", () => {
    test("Then it should return a list on animals", async () => {
      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const animals = await getAnimals(skip, limit);

      const expectedAnimals = animalsMock;

      expect(animals).toStrictEqual(expectedAnimals);
    });
  });

  describe("When it's called but can't connet to the Api Rest", () => {
    test("Then it should show a feedback modal error with the message 'Something went wrong. Try it again please.'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const animals = await getAnimals(skip, limit);

      expect(animals).toBeUndefined();
    });
  });
});
