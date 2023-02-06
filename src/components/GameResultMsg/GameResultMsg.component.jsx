import { useEffect, useState } from "react";
import { HOUSE, PLAYER } from "../../constant/Participant";

import "./GameResultMsg.style.scss";

function GameResultMsg({ winner }) {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (winner === PLAYER) {
      setMsg("You win!");
    } else if (winner === HOUSE) {
      setMsg("You loose!");
    } else {
      setMsg("Its draw!");
    }
  }, [winner]);

  return <div className="game-msg">{msg}</div>;
}

export default GameResultMsg;
