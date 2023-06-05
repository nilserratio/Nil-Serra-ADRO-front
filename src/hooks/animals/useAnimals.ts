import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { AnimalDataStructure } from "../../types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/iu/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimals = () => {
  const dispatch = useAppDispatch();

  const getAnimals = useCallback(async (): Promise<AnimalDataStructure[]> => {
    dispatch(showLoaderActionCreator());

    const {
      data: { animals },
    } = await axios.get<{ animals: AnimalDataStructure[] }>(
      `${apiUrl}${paths.animals}`
    );

    dispatch(hideLoaderActionCreator());

    return animals;
  }, [dispatch]);

  return { getAnimals };
};

export default useAnimals;
