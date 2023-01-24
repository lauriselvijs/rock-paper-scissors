import './GameMsg.style.scss';
import { useSelector } from 'react-redux';
import { Gesture } from '../../util/Gesture';

const { checkIfPlayerWinRPS } = Gesture;

function GameMsg() {
  const houseGesture = useSelector((state) => state.gesture.houseGesture);
  const gesture = useSelector((state) => state.gesture.gesture);

  return (
    <div className="game-msg">{checkIfPlayerWinRPS(gesture, houseGesture)}</div>
  );
}

export default GameMsg;
