import { createSlice } from "@reduxjs/toolkit";
import state from "./Game.state";
import { SLICE_NAME } from "./Game.config";
import { getRandomGesture, getWinner } from "../../../util/Game";
import { SCISSORS, ROCK, PAPER } from "../../../constant/Gesture";
import { MENU_SCREEN, MAIN_SCREEN } from "../../../constant/GameScreen";
import { HOUSE, PLAYER } from "../../../constant/Participant";

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
      state.screen = MAIN_SCREEN;
    },
    screenUpdatedToMenu: (state) => {
      state.screen = MENU_SCREEN;
    },
    gestureAnimationEnded: (state) => {
      state.showAnimation = false;
    },
    gestureAnimationStarted: (state) => {
      state.showAnimation = true;
    },
    winnerDecided: (state) => {
      state.winner = getWinner(
        state.gesture,
        getRandomGesture(SCISSORS, ROCK, PAPER)
      );
    },
    winnerReset: (state) => {
      state.winner = "";
    },
    scoreReset: (state) => {
      state.score = 0;
    },
    scoreIncreasedByOne: (state) => {
      state.score += 1;
    },
    scoreDecreasedByOne: (state) => {
      state.score += 1;
    },
  },
});

export const gameActions = game.actions;
export const gameReducer = game.reducer;
export const gameSliceName = game.name;
