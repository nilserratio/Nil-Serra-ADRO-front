import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimalsStateStructure } from "./types";
import { AnimalDataStructure } from "../../types";

export const initialAnimalsState: AnimalsStateStructure = {
  animals: [],
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
  },
});

export const {
  loadAnimals: loadAnimalsActionCreator,
  removeAnimal: removeAnimalActionCreator,
} = animalsSlice.actions;
export const animalsReducer = animalsSlice.reducer;
