import { PAPER } from "../../constant/Gesture";
import { Outcome } from "../../constant/Result";

const { DRAW } = Outcome;

const state = {
  gesture: PAPER,
  screen: 0,
  houseGesture: PAPER,
  showAnimation: false,
  winner: DRAW,
};

export default state;
