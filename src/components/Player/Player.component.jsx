import { useMemo } from "react";
import { useSelector } from "react-redux";

import { GESTURE_SRC } from "../../constant/Gesture";
import { PLAYER } from "../../constant/Participant";
import { gameSliceName } from "../../store/features/Game";

import styles from "./Player.style.module.scss";

function Player() {
  const { playerGesture, winner } = useSelector(
    (state) => state[gameSliceName]
  );

  const gestureSrc = useMemo(() => GESTURE_SRC[playerGesture], [playerGesture]);

  const renderWinnerGradient = useMemo(
    () => winner === PLAYER && <div className={styles.winnerGradient} />,
    [winner]
  );

  return (
    <div className={styles.player}>
      <h3 className={styles.youPicked}>YOU PICKED</h3>
      <img src={gestureSrc} alt={playerGesture} className={styles.gesture} />
      {renderWinnerGradient}
    </div>
  );
}

export default Player;
