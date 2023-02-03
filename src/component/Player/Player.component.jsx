import "./Player.style.scss";
import { useSelector } from "react-redux";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import { SCISSORS, ROCK, PAPER } from "../../constant/Gesture";
import { PLAYER } from "../../constant/Participant";
import { gestureSliceName } from "../../store/features/Gesture";

function Player() {
  const { gesture, winner } = useSelector((state) => state[gestureSliceName]);

  return (
    <div className="player">
      <div className="you-picked">YOU PICKED</div>
      {gesture === PAPER && <img src={paper} alt="Paper" className="gesture" />}
      {gesture === SCISSORS && (
        <img src={scissors} alt="Scissors" className="gesture" />
      )}
      {gesture === ROCK && <img src={rock} alt="Rock" className="gesture" />}
      {winner === PLAYER && <div className="winner-gradient" />}
    </div>
  );
}

export default Player;
