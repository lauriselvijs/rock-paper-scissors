import { useSelector } from "react-redux";

import { Gesture } from "../../util/Gesture";

import "./GameResultMsg.style.scss";

const { checkIfPlayerWinRPS } = Gesture;

function GameResultMsg() {
  const houseGesture = useSelector((state) => state.gesture.houseGesture);
  const gesture = useSelector((state) => state.gesture.gesture);

  return (
    <div className="game-msg">{checkIfPlayerWinRPS(gesture, houseGesture)}</div>
  );
}

export default GameResultMsg;
