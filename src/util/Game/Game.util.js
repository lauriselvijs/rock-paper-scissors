import { PAPER, ROCK, SCISSORS } from "../../constant/Gesture";
import { PLAYER, HOUSE } from "../../constant/Participant";
import { wins } from "../../constant/Rules";

export const getRandomGesture = () => {
  const gestures = [PAPER, ROCK, SCISSORS];
  const gesture = gestures[Math.floor(Math.random() * gestures.length)];

  return gesture;
};

export const getWinner = (playerGesture) => {
  const houseGesture = getRandomGesture();

  console.log("house", houseGesture, "player", playerGesture);

  return wins[playerGesture] === houseGesture ? HOUSE : PLAYER;
};
