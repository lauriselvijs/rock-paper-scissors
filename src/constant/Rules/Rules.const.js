import { SCISSORS, PAPER, ROCK } from "../Gesture";

export const WIN_COMBINATIONS = {
  [ROCK]: SCISSORS,
  [SCISSORS]: PAPER,
  [PAPER]: ROCK,
};
