import { SCISSORS, PAPER, ROCK } from "../Gesture";

export const wins = {
  [ROCK]: SCISSORS,
  [SCISSORS]: PAPER,
  [PAPER]: ROCK,
};
