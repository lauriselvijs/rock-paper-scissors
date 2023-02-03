import { createSlice } from "@reduxjs/toolkit";
import state from "./Score.state";
import { SLICE_NAME } from "./Score.config";

const score = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    scoreIncreasedByOne: (state) => {
      state.score += 1;
    },
    scoreDecreasedByOne: (state) => {
      state.score += 1;
    },
    scoreReset: (state) => {
      state.score = 0;
    },
  },
});

export const scoreActions = score.actions;
export const scoreReducer = score.reducer;
export const scoreSliceName = score.name;
