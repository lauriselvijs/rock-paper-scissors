import { PAPER } from "../../../constant/Gesture";
import { Outcome } from "../../../constant/Result";
import { MENU_SCREEN } from "../../../constant/GameScreen";

const { DRAW } = Outcome;

const state = {
  playerGesture: PAPER,
  score: 0,
  screen: MENU_SCREEN,
  houseGesture: PAPER,
  showAnimation: false,
  winner: DRAW,
};

export default state;
