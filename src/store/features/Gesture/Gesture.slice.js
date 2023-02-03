import { createSlice } from "@reduxjs/toolkit";
import state from "./Gesture.state";
import { SLICE_NAME } from "./Gesture.config";

const gesture = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    gestureUpdated: (state, { payload: gesture }) => {
      state.gesture = gesture;
    },
    houseGestureUpdated: (state, { payload: gesture }) => {
      state.houseGesture = gesture;
    },
    houseGestureReset: (state) => {
      state.houseGesture = "";
    },
    screenUpdated: (state, { payload: screen }) => {
      state.screen = screen;
    },
    gestureAnimationEnded: (state) => {
      state.showAnimation = false;
    },
    gestureAnimationStarted: (state) => {
      state.showAnimation = true;
    },
    winnerDecided: (state, { payload: winner }) => {
      state.winner = { payload: winner };
    },
    winnerReset: (state) => {
      state.winner = "";
    },
  },
});

export const gestureActions = gesture.actions;
export const gestureReducer = gesture.reducer;
export const gestureSliceName = gesture.name;
