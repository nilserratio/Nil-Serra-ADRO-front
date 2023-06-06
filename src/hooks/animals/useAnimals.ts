import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { AnimalDataStructure } from "../../types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/iu/uiSlice";
import { feedbackMessages } from "../../utils/responseData/responseData";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimals = () => {
  const dispatch = useAppDispatch();

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

  dispatch(hideLoaderActionCreator());

  return { getAnimals };
};

export default useAnimals;
