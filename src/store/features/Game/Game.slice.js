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
    playerGestureUpdated: (state, action) => {
      state.playerGesture = action.payload;
      state.gameScreen = MAIN_SCREEN;
    },
    winnerUpdated: (state, action) => {
      state.winner = action.payload;
    },
    // gameUpdatedWithPlayerGesture: {
    //   prepare: (playerGesture) => {
    //     const houseGesture = getRandomGesture();
    //     const winner = getWinner(playerGesture, houseGesture);

    //     return { payload: { playerGesture, houseGesture, winner } };
    //   },
    //   reducer: (
    //     state,
    //     { payload: { playerGesture, houseGesture, winner } }
    //   ) => {
    //     state.gameScreen = MAIN_SCREEN;
    //     state.playerGesture = playerGesture;
    //     state.houseGesture = houseGesture;
    //     state.winner = winner;

    //     if (winner === PLAYER) {
    //       state.score = state.score + 1;
    //     } else if (winner === HOUSE && state.score > 0) {
    //       state.score = state.score - 1;
    //     }
    //   },
    // },
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
