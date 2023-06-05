import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { AnimalDataStructure } from "../../types";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimals = () => {
  const getAnimals = useCallback(async (): Promise<AnimalDataStructure[]> => {
    const {
      data: { animals },
    } = await axios.get<{ animals: AnimalDataStructure[] }>(
      `${apiUrl}${paths.animals}`
    );

    return animals;
  }, []);

  return { getAnimals };
};

export default useAnimals;
