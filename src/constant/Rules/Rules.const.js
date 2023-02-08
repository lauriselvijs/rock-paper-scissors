import { SCISSORS, PAPER, ROCK } from "../Gesture";

export const WIN_COMBINATION = Object.freeze({
  [ROCK]: SCISSORS,
  [SCISSORS]: PAPER,
  [PAPER]: ROCK,
});
