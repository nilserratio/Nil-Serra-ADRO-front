import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoader: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoader: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLodergActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
