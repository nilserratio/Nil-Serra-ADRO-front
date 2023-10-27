import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { AnimalDataStructure, AnimalsResponseStructure } from "../../types";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/iu/uiSlice";
import { feedbackMessages } from "../../utils/responseData/responseData";
import { removeAnimalActionCreator } from "../../store/animals/animalsSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimals = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const reqConfigAuthorization = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getAnimals = useCallback(
    async (
      skip: number,
      limit: number
    ): Promise<AnimalsResponseStructure | undefined> => {
      try {
        dispatch(showLoaderActionCreator());

        const {
          data: { animals, totalAnimals },
        } = await axios.get<AnimalsResponseStructure>(
          `${apiUrl}${paths.animals}?skip=${skip}&limit=${limit}`
        );

        dispatch(hideLoaderActionCreator());

        return {
          animals,
          totalAnimals,
          limit,
        };
      } catch (error) {
        dispatch(hideLoaderActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: feedbackMessages.error,
          })
        );
      }
    },
    [dispatch]
  );

  const removeAnimal = async (
    idAnimal: string
  ): Promise<number | undefined> => {
    try {
      dispatch(showLoaderActionCreator());

      const { status } = await axios.delete(
        `${apiUrl}${paths.animals}/${idAnimal}`,
        reqConfigAuthorization
      );

      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: feedbackMessages.deleteOk,
        })
      );

      dispatch(removeAnimalActionCreator(idAnimal));

      return status;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.deleteFailed,
        })
      );
    }
  };

  const createAnimal = async (
    animal: AnimalDataStructure
  ): Promise<AnimalDataStructure | undefined> => {
    try {
      dispatch(showLoaderActionCreator());

      const { data } = await axios.post<{ animal: AnimalDataStructure }>(
        `${apiUrl}${paths.animals}${paths.create}`,
        animal,
        reqConfigAuthorization
      );

      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: feedbackMessages.createOk,
        })
      );

      return data.animal;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.createFailed,
        })
      );
    }
  };

  const getAnimalById = useCallback(
    async (idAnimal: string): Promise<AnimalDataStructure | undefined> => {
      try {
        dispatch(showLoaderActionCreator());

        const {
          data: { animalById },
        } = await axios.get<{ animalById: AnimalDataStructure }>(
          `${apiUrl}${paths.animals}/${idAnimal}`
        );

        dispatch(hideLoaderActionCreator());

        return animalById;
      } catch (error) {
        dispatch(hideLoaderActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: feedbackMessages.detailFailed,
          })
        );
      }
    },
    [dispatch]
  );

  return { getAnimals, removeAnimal, createAnimal, getAnimalById };
};

export default useAnimals;
