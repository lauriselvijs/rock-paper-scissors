import React from "react";
import "./GameResultWrapper.style.scss";

const GameResultWrapper = ({ children }) => {
  return <div className="game-info">{children}</div>;
};

export default GameResultWrapper;
