import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { ANIMATION_LENGTH } from "../../config/GameAnimation";
import logo from "../../asset/icons/logo.svg";
import { useTimeout } from "../../hook/Timeout";
import { gameActions, gameSliceName } from "../../store/features/Game";

import styles from "./Score.style.module.scss";
import { useEffect, useState } from "react";

const Score = () => {
  const { score } = useSelector((state) => state[gameSliceName]);

  const dispatch = useDispatch();
  const { scoreReset } = bindActionCreators(gameActions, dispatch);

  const onResetClick = () => {
    scoreReset();
  };

  return (
    <div className={styles.score}>
      <img
        className={styles.gameLogo}
        src={logo}
        alt="Logo"
        width={162}
        height={99}
      />
      <button
        onClick={onResetClick}
        aria-label="Click to reset score"
        title="Click to reset score"
        className={styles.points}
      >
        <div className={styles.pointsText}>SCORE</div>
        <div className={styles.pointsResult}>{score}</div>
      </button>
    </div>
  );
};

export default Score;
