import { HOUSE, PLAYER, DRAW } from "../../constant/Participant";

export const MESSAGES = {
  [DRAW]: "DRAW",
  [HOUSE]: "LOOSE",
  [PLAYER]: "WIN",
};

export const getWinnerMsg = (winner) => {
  return MESSAGES[winner] || "Invalid winner";
};
