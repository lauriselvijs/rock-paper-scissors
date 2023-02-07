import styles from "./Player.style.module.scss";
import { useSelector } from "react-redux";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import { SCISSORS, ROCK, PAPER } from "../../constant/Gesture";
import { PLAYER } from "../../constant/Participant";
import { gameSliceName } from "../../store/features/Game";

function Player() {
  const { playerGesture, winner } = useSelector(
    (state) => state[gameSliceName]
  );

  return (
    <div className={styles.player}>
      <div className={styles.youPicked}>YOU PICKED</div>
      {playerGesture === PAPER && (
        <img src={paper} alt="Paper" className={styles.gesture} />
      )}
      {playerGesture === SCISSORS && (
        <img src={scissors} alt="Scissors" className={styles.gesture} />
      )}
      {playerGesture === ROCK && (
        <img src={rock} alt="Rock" className={styles.gesture} />
      )}
      {/* {winner === PLAYER && <div className="winner-gradient" />} */}
    </div>
  );
}

export default Player;
