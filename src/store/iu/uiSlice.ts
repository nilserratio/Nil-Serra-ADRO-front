import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
