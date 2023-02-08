import { PAPER, ROCK, SCISSORS } from "../../constant/Gesture";
import { PLAYER, HOUSE, DRAW } from "../../constant/Participant";
import { WIN_COMBINATION } from "../../constant/Rules/Rules.const";

const gestures = [PAPER, ROCK, SCISSORS];

export const getRandomGesture = () => {
  const gesture = gestures[Math.floor(Math.random() * gestures.length)];

  return gesture;
};

export const getWinner = (playerGesture, homeGesture) => {
  if (!gestures.includes(playerGesture) || !gestures.includes(homeGesture)) {
    const validChoices = gestures.join(", ");

    throw new Error(`Invalid choice. Only ${validChoices} are allowed.`);
  }

  if (playerGesture === homeGesture) {
    return DRAW;
  }

  return WIN_COMBINATION[playerGesture] === homeGesture ? PLAYER : HOUSE;
};
