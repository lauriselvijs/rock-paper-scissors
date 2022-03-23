import {
  SET_GESTURE_ACTION,
  SET_GAME_SCREEN,
  SET_HOUSE_GESTURE,
  SET_GESTURE_ANIMATION_END,
  SET_WINNER,
} from "./Gesture.action.type";

import { GameScreen } from "../../constant/GameScreen";
import { Outcome } from "../../constant/Result";

const { DRAW } = Outcome;
const { PAPER } = GameScreen;

export const setGesture =
  (gesture = PAPER) =>
  (dispatch) => {
    dispatch({ type: SET_GESTURE_ACTION, payload: gesture });
  };

export const setHouseGesture =
  (gesture = PAPER) =>
  (dispatch) => {
    dispatch({ type: SET_HOUSE_GESTURE, payload: gesture });
  };

export const setGameScreen =
  (screen = 0) =>
  (dispatch) => {
    dispatch({ type: SET_GAME_SCREEN, payload: screen });
  };

export const setGestureAnimationEnd =
  (show = false) =>
  (dispatch) => {
    dispatch({ type: SET_GESTURE_ANIMATION_END, payload: show });
  };

export const setWinner =
  (winner = DRAW) =>
  (dispatch) => {
    dispatch({ type: SET_WINNER, payload: winner });
  };
