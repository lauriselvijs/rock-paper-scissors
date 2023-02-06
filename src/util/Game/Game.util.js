import { SCISSORS, PAPER, ROCK } from "../../constant/Gesture";
import { GameMsg } from "../../constant/Result";
import { HOUSE, PLAYER } from "../../constant/Participant";

const { YOU_WIN, YOU_LOOSE, DRAW } = GameMsg;

const wins = {
  [ROCK]: SCISSORS,
  [SCISSORS]: PAPER,
  [PAPER]: ROCK,
};

export const checkIfPlayerWins = (playerGesture, houseGesture) => {
  if (playerGesture === houseGesture) {
    return DRAW;
  }
  return wins[playerGesture] === houseGesture ? YOU_WIN : YOU_LOOSE;
};

export const getWinner = (playerGesture, homeGesture) => {
  return wins[playerGesture] === homeGesture ? HOUSE : PLAYER;
};
