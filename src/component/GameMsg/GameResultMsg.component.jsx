import { useSelector } from "react-redux";

import { checkIfPlayerWins } from "../../util/Game";
import { gestureSliceName } from "../../store/features/Gesture";

import "./GameResultMsg.style.scss";

function GameResultMsg() {
  const { houseGesture, gesture } = useSelector(
    (state) => state[gestureSliceName]
  );

  return (
    <div className="game-msg">{checkIfPlayerWins(gesture, houseGesture)}</div>
  );
}

export default GameResultMsg;
