import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Gesture.config";
import state from "./HelpModal.state";

const helpModal = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    modalOpened: (state) => {
      state.modalOpen = true;
    },
    modalClosed: (state) => {
      state.modalOpen = false;
    },
    animationStarted: (state) => {
      state.showAnimation = true;
    },
    animationEnded: (state) => {
      state.showAnimation = false;
    },
  },
});

export const helpModalActions = helpModal.actions;
export const helpModalReducer = helpModal.reducer;
export const helpModalSliceName = helpModal.name;
