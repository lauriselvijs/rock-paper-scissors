import { Gestures } from '../../constant/Gesture';
import { Participant } from '../../constant/Participant';

const { HOUSE, PLAYER } = Participant;
const { SCISSORS, PAPER, ROCK } = Gestures;

export const checkIfPlayerWinRPS = (playerGesture, homeGesture) => {
  if (playerGesture === ROCK && homeGesture === PAPER) {
    return 'YOU LOOSE';
  } if (playerGesture === PAPER && homeGesture === ROCK) {
    return 'YOU WIN';
  }

  if (playerGesture === ROCK && homeGesture === SCISSORS) {
    return 'YOU WIN';
  } if (playerGesture === SCISSORS && homeGesture === ROCK) {
    return 'YOU LOOSE';
  }

  if (playerGesture === SCISSORS && homeGesture === PAPER) {
    return 'YOU WIN';
  } if (playerGesture === PAPER && homeGesture === SCISSORS) {
    return 'YOU LOOSE';
  }

  if (playerGesture === homeGesture) {
    return 'DRAW';
  }
};

export const getWinnerRPS = (playerGesture, homeGesture) => {
  if (playerGesture === ROCK && homeGesture === PAPER) {
    return HOUSE;
  } if (playerGesture === PAPER && homeGesture === ROCK) {
    return PLAYER;
  }

  if (playerGesture === ROCK && homeGesture === SCISSORS) {
    return PLAYER;
  } if (playerGesture === SCISSORS && homeGesture === ROCK) {
    return HOUSE;
  }

  if (playerGesture === SCISSORS && homeGesture === PAPER) {
    return PLAYER;
  } if (playerGesture === PAPER && homeGesture === SCISSORS) {
    return HOUSE;
  }
};

export const randomGesture = (...gestures) => {
  const gesture = gestures[Math.floor(Math.random() * gestures.length)];

  return gesture;
};
