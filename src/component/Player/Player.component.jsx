import './Player.style.scss';
import { useSelector } from 'react-redux';
import paper from '../../asset/images/paper.svg';
import scissors from '../../asset/images/scissors.svg';
import rock from '../../asset/images/rock.svg';
import { Gestures } from '../../constant/Gesture';
import { Participant } from '../../constant/Participant';

const { SCISSORS, ROCK, PAPER } = Gestures;
const { PLAYER } = Participant;

function Player() {
  const gesture = useSelector((state) => state.gesture.gesture);
  const winner = useSelector((state) => state.gesture.winner);

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
