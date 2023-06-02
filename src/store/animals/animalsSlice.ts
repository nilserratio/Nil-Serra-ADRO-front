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
    ) => ({
      ...currentAnimalsState,
      animals: [...action.payload],
    }),
  },
});

export const { loadAnimals: loadAnimalsActionCreator } = animalsSlice.actions;
export const animalsReducer = animalsSlice.reducer;
