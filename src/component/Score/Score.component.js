import React from "react";
import "./Score.style.scss";
import { useSelector } from "react-redux";

function Score() {
  const score = useSelector((state) => state.score.score);

  return (
    <div className="score">
      <div className="score-text">SCORE</div>
      <div className="score-result">{score}</div>
    </div>
  );
}

export default Score;
