import { SCISSORS, PAPER, ROCK } from "../../../constant/Gesture";

export const SLICE_NAME = "game";

export const getRandomGesture = () => {
  const gestures = [SCISSORS, PAPER, ROCK];

  const gesture = gestures[Math.floor(Math.random() * gestures.length)];

  return gesture;
};
