import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { AnimalDataStructure } from "../../types";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/iu/uiSlice";
import { feedbackMessages } from "../../utils/responseData/responseData";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimals = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const getAnimals = useCallback(async (): Promise<
    AnimalDataStructure[] | undefined
  > => {
    dispatch(showLoaderActionCreator());

    try {
      const {
        data: { animals },
      } = await axios.get<{ animals: AnimalDataStructure[] }>(
        `${apiUrl}${paths.animals}`
      );

      dispatch(hideLoaderActionCreator());

      return animals;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.error,
        })
      );
    }
  }, [dispatch]);

  const removeAnimal = async (
    idAnimal: string
  ): Promise<boolean | undefined> => {
    dispatch(showLoaderActionCreator());

    const isRemoved = true;

    try {
      await axios.delete(`${apiUrl}${paths.animals}/${idAnimal}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: feedbackMessages.deleteOk,
        })
      );

      return isRemoved;
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

  return { getAnimals, removeAnimal };
};

export default useAnimals;
