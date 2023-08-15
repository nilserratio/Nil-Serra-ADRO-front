import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimalsStateStructure } from "./types";
import { AnimalDataStructure } from "../../types";
import { emptyAnimalState } from "../../utils/animalStates/animalStates";

export const initialAnimalsState: AnimalsStateStructure = {
  animals: [],
  animalById: emptyAnimalState,
  limit: 6,
  totalAnimals: 0,
};

const animalsSlice = createSlice({
  name: "animals",
  initialState: initialAnimalsState,
  reducers: {
    loadAnimals: (
      currentAnimalsState: AnimalsStateStructure,
      action: PayloadAction<AnimalDataStructure[]>
    ): AnimalsStateStructure => ({
      ...currentAnimalsState,
      animals: [...action.payload],
    }),

    removeAnimal: (
      currentAnimalsState: AnimalsStateStructure,
      action: PayloadAction<string>
    ): AnimalsStateStructure => ({
      ...currentAnimalsState,
      animals: currentAnimalsState.animals.filter(
        (animal) => animal.id !== action.payload
      ),
    }),

    createAnimal: (
      currentAnimalsState: AnimalsStateStructure,
      action: PayloadAction<AnimalDataStructure>
    ): AnimalsStateStructure => ({
      ...currentAnimalsState,
      animals: [...currentAnimalsState.animals, action.payload],
    }),

    loadSelectedAnimal: (
      currentAnimalsState: AnimalsStateStructure,
      action: PayloadAction<AnimalDataStructure>
    ): AnimalsStateStructure => ({
      ...currentAnimalsState,
      animalById: action.payload,
    }),

    loadMoreAnimals: (
      currentAnimalsState: AnimalsStateStructure
    ): AnimalsStateStructure => ({
      ...currentAnimalsState,
      limit: currentAnimalsState.limit + 6,
    }),
  },
});

export const {
  loadAnimals: loadAnimalsActionCreator,
  removeAnimal: removeAnimalActionCreator,
  createAnimal: createAnimalActionCreator,
  loadSelectedAnimal: loadSelectedAnimalActionCreator,
  loadMoreAnimals: loadMoreAnimalsActionCreator,
} = animalsSlice.actions;
export const animalsReducer = animalsSlice.reducer;
