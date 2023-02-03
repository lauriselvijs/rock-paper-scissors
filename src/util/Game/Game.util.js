import { SCISSORS, PAPER, ROCK } from "../../constant/Gesture";
import { HOUSE, PLAYER } from "../../constant/Participant";

export const checkIfPlayerWins = (playerGesture, homeGesture) => {
  if (playerGesture === ROCK && homeGesture === PAPER) {
    return "YOU LOOSE";
  }
  if (playerGesture === PAPER && homeGesture === ROCK) {
    return "YOU WIN";
  }

  if (playerGesture === ROCK && homeGesture === SCISSORS) {
    return "YOU WIN";
  }
  if (playerGesture === SCISSORS && homeGesture === ROCK) {
    return "YOU LOOSE";
  }

  if (playerGesture === SCISSORS && homeGesture === PAPER) {
    return "YOU WIN";
  }
  if (playerGesture === PAPER && homeGesture === SCISSORS) {
    return "YOU LOOSE";
  }

  if (playerGesture === homeGesture) {
    return "DRAW";
  }
};

export const getWinner = (playerGesture, homeGesture) => {
  if (playerGesture === ROCK && homeGesture === PAPER) {
    return HOUSE;
  }
  if (playerGesture === PAPER && homeGesture === ROCK) {
    return PLAYER;
  }

  if (playerGesture === ROCK && homeGesture === SCISSORS) {
    return PLAYER;
  }
  if (playerGesture === SCISSORS && homeGesture === ROCK) {
    return HOUSE;
  }

  if (playerGesture === SCISSORS && homeGesture === PAPER) {
    return PLAYER;
  }
  if (playerGesture === PAPER && homeGesture === SCISSORS) {
    return HOUSE;
  }
};

export const getRandomGesture = (...gestures) => {
  const gesture = gestures[Math.floor(Math.random() * gestures.length)];

  return gesture;
};
