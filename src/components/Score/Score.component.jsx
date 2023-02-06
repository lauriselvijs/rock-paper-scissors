import { useEffect, useState } from "react";

import logo from "../../asset/icons/logo.svg";
import { HOUSE, PLAYER } from "../../constant/Participant";

import "./Score.style.scss";

function Score({ winner }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (winner === PLAYER) {
      setScore((score) => score + 1);
    }
    if (winner === HOUSE && score > 0) {
      setScore((score) => score - 1);
    }
  }, [winner]);

  const onScoreClick = () => {
    setScore(0);
  };

  return (
    <div className="score">
      <img className="game-logo" src={logo} alt="Logo" />
      <button
        aria-label="Click to reset score"
        className="score-btn"
        title="Click to reset"
        onClick={onScoreClick}
      >
        <div className="score-btn-text">SCORE</div>
        <div className="score-btn-result">{score}</div>
      </button>
    </div>
  );
}

export default Score;
