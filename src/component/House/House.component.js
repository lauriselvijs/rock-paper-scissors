import { useEffect } from "react";
import "./House.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Gesture } from "../../util/Gesture";
import { Gestures } from "../../constant/Gesture";
import { GestureActions, ScoreActions } from "../../store/action";
import { Participant } from "../../constant/Participant";

const { randomGesture, getWinnerRPS } = Gesture;
const { HOUSE, PLAYER } = Participant;
const { SCISSORS, ROCK, PAPER } = Gestures;

function House() {
  const dispatch = useDispatch();
  const { setHouseGesture, setGestureAnimationEnd, setWinner } =
    bindActionCreators(GestureActions, dispatch);
  const { scoreUpdated } = bindActionCreators(ScoreActions, dispatch);
  const houseGesture = useSelector((state) => state.gesture.houseGesture);
  const gesture = useSelector((state) => state.gesture.gesture);
  const winner = useSelector((state) => state.gesture.winner);

  useEffect(() => {
    setWinner(getWinnerRPS(gesture, houseGesture));
    winner === HOUSE && scoreUpdated(-1);
    winner === PLAYER && scoreUpdated(1);
  }, [gesture, houseGesture, winner]);

  const onSelectedAnimationEnd = () => {
    setGestureAnimationEnd(true);
    setHouseGesture(randomGesture(SCISSORS, ROCK, PAPER));
  };

  return (
    <div className="house">
      <div className="house-picked">HOUSE PICKED</div>
      <div
        className={houseGesture.toLowerCase() || "image-loop"}
        onAnimationEnd={onSelectedAnimationEnd}
      />
      {winner === HOUSE && <div className="winner-gradient-house" />}
    </div>
  );
}

export default House;
