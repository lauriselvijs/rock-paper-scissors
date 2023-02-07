import { useSelector } from "react-redux";
import { gameSliceName } from "../../store/features/Game";
import { getWinnerMsg } from "./GameResultMsg.config";

import "./GameResultMsg.style.scss";

function GameResultMsg() {
  const { winner } = useSelector((state) => state[gameSliceName]);

  return <div className="game-msg">YOU {getWinnerMsg(winner)}</div>;
}

export default GameResultMsg;
