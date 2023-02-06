import { createSlice } from "@reduxjs/toolkit";

import { SCISSORS, ROCK, PAPER } from "../../../constant/Gesture";
import { MENU_SCREEN, MAIN_SCREEN } from "../../../constant/GameScreen";

import state from "./Game.state";
import { SLICE_NAME } from "./Game.config";

const game = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    gestureUpdatedToPaper: (state) => {
      state.playerGesture = PAPER;
    },
    gestureUpdatedToRock: (state) => {
      state.playerGesture = ROCK;
    },
    gestureUpdatedToScissors: (state) => {
      state.playerGesture = SCISSORS;
    },
    screenUpdatedToMain: (state) => {
      state.gameScreen = MAIN_SCREEN;
    },
    screenUpdatedToMenu: (state) => {
      state.gameScreen = MENU_SCREEN;
    },
  },
});

export const gameActions = game.actions;
export const gameReducer = game.reducer;
export const gameSliceName = game.name;
