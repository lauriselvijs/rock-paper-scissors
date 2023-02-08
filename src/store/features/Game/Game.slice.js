import { createSlice } from "@reduxjs/toolkit";

import { MENU_SCREEN, MAIN_SCREEN } from "../../../constant/GameScreen";
import { getRandomGesture, getWinner } from "../../../util/Game";
import { PLAYER, HOUSE } from "../../../constant/Participant";

import state from "./Game.state";
import { SLICE_NAME } from "./Game.config";

const game = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    playerGestureUpdated: (state, { payload: playerGesture }) => {
      state.playerGesture = playerGesture;
      state.gameScreen = MAIN_SCREEN;
      state.loading = true;
    },
    gameResultUpdated: (state, { payload: winner }) => {
      state.winner = winner;

      if (winner === PLAYER) {
        state.score = state.score + 1;
      } else if (winner === HOUSE && state.score > 0) {
        state.score = state.score - 1;
      }

      state.loading = false;
    },
    screenUpdatedToMain: (state) => {
      state.gameScreen = MAIN_SCREEN;
    },
    screenUpdatedToMenu: (state) => {
      state.gameScreen = MENU_SCREEN;
    },
    scoreReset: (state) => {
      state.score = 0;
    },
  },
});

export const gameActions = game.actions;
export const gameReducer = game.reducer;
export const gameSliceName = game.name;
