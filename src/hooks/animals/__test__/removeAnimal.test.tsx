import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { vi } from "vitest";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { store } from "../../../store";
import { feedbackMessages } from "../../../utils/responseData/responseData";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a removeAnimals fucntion", () => {
  const id = animalsMock[0].id;

  describe("When it's called with an animal id", () => {
    test("Then it should return a status code 200'", async () => {
      const expectedStatusCode = 200;

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await removeAnimal(id as string);

      expect(response).toBe(expectedStatusCode);
    });

    test("Then it should show a succeed feedback modal with the message 'You have successfully deleted this card from the adoption list.'", async () => {
      server.resetHandlers(...handlers);

      const expectedFeedbackMessage = feedbackMessages.deleteOk;

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await removeAnimal(id as string);

      const feedbackMessage = await store.getState().ui.message;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });

  describe("When it's called with an animal id but can't connet to the Api Rest", () => {
    test("Then it should show a error feedback with the message 'There was an error on deleting the card from the adoption list. Try it again please.'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const response = await removeAnimal(id as string);

      expect(response).toBeUndefined();
    });

    test("Then it should show a error feedback with the message 'There was an error on deleting the card from the adoption list. Try it again please.'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedFeedbackMessage = feedbackMessages.deleteFailed;

      const {
        result: {
          current: { removeAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await removeAnimal(id as string);

      const feedbackMessage = await store.getState().ui.message;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });
});
