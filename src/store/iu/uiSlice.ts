import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStructure } from "./types";

const initialLoaderState: UiStructure = {
  isLoading: false,
  showFeedback: false,
  isError: false,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialLoaderState,
  reducers: {
    showLoader: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoader: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStructure,
      action: PayloadAction<FeedbackPayloadStructure>
    ): UiStructure => ({
      ...currentState,
      showFeedback: true,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    hideFeedback: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      showFeedback: false,
      isError: false,
      message: "",
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
