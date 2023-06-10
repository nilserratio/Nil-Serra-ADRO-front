import { renderHook } from "@testing-library/react";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { vi } from "vitest";
import { feedbackMessages } from "../../../utils/responseData/responseData";
import { store } from "../../../store";

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

    test("Then it should show a succeed feedback modal with the message 'You have successfully added to the adoption list.'", async () => {
      server.resetHandlers(...handlers);

      const expectedFeedbackMessage = feedbackMessages.createOk;

      const {
        result: {
          current: { createAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await createAnimal(animalsMock[0]);

      const feedbackMessage = await store.getState().ui.message;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
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

    test("Then it should show a succeed feedback modal with the message 'There was an error on adding to the adoption list. Try it again please.'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedFeedbackMessage = feedbackMessages.createFailed;

      const {
        result: {
          current: { createAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await createAnimal(animalsMock[0]);

      const feedbackMessage = await store.getState().ui.message;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });
});
