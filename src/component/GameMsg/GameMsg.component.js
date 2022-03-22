import React from "react";
import "./GameMsg.style.scss";
import { Gesture } from "../../util/Gesture";

const GameMsg = () => {
  const { compareThreeGestures } = Gesture;

  return <div className="game-msg">{compareThreeGestures()}</div>;
};

export default GameMsg;
