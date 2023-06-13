import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../utils/testUtils/testUtils";
import { vi } from "vitest";
import { animalsMock } from "../../../mocks/animals/animalsMocks";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { feedbackMessages } from "../../../utils/responseData/responseData";
import { store } from "../../../store";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getAnimalsById fucntion", () => {
  describe("When it's called with an animal id", () => {
    test("Then it should return the animals with that id", async () => {
      const {
        result: {
          current: { getAnimalById },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const selectedAnimal = await getAnimalById(animalsMock[0].id as string);

      const expectedAnimal = animalsMock[0];

      expect(selectedAnimal).toStrictEqual(expectedAnimal);
    });
  });

  describe("When it's called with an animal id but can't find the id", () => {
    test("Then it should show a feedback modal error with the message 'There was an error charging the detail animal page.'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedFeedbackMessage = feedbackMessages.detailFailed;

      const {
        result: {
          current: { getAnimalById },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await getAnimalById(animalsMock[0].id as string);

      const feedbackMessage = await store.getState().ui.message;

      expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });
});
