import { useMemo } from "react";
import { useSelector } from "react-redux";

import { GESTURE_SRC } from "../../constant/Gesture";
import { gameSliceName } from "../../store/features/Game";

import styles from "./Player.style.module.scss";

function Player() {
  const { playerGesture, winner } = useSelector(
    (state) => state[gameSliceName]
  );

  const gestureSrc = useMemo(() => GESTURE_SRC[playerGesture], [playerGesture]);

  return (
    <div className={styles.player}>
      <h3 className={styles.youPicked}>YOU PICKED</h3>
      <img src={gestureSrc} alt={playerGesture} className={styles.gesture} />
    </div>
  );
}

export default Player;
