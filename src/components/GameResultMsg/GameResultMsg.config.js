import { HOUSE, PLAYER, DRAW } from "../../constant/Participant";

export const MESSAGES = {
  [DRAW]: "Draw",
  [HOUSE]: "You lost",
  [PLAYER]: "You win",
};

export const getWinnerMsg = (winner) => {
  return MESSAGES[winner] || "Invalid winner";
};
