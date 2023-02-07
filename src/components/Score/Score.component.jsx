import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import logo from "../../asset/icons/logo.svg";
import { gameSliceName } from "../../store/features/Game";

import "./Score.style.scss";

function Score() {
  const { score } = useSelector((state) => state[gameSliceName]);

  return (
    <div className="score">
      <img className="game-logo" src={logo} alt="Logo" />
      <div className="points">
        <div className="points-text">SCORE</div>
        <div className="points-result">{score}</div>
      </div>
    </div>
  );
}

export default Score;
