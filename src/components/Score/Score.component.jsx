import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import logo from "../../asset/icons/logo.svg";
import { gameSliceName } from "../../store/features/Game";

import styles from "./Score.style.module.scss";

const Score = () => {
  const { score } = useSelector((state) => state[gameSliceName]);

  return (
    <div className={styles.score}>
      <img className={styles.gameLogo} src={logo} alt="Logo" />
      <div className={styles.points}>
        <div className={styles.pointsText}>SCORE</div>
        <div className={styles.pointsResult}>{score}</div>
      </div>
    </div>
  );
};

export default Score;
