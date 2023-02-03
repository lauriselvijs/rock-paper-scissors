import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getRandomGesture, getWinner } from "../../util/Game";
import { SCISSORS, ROCK, PAPER } from "../../constant/Gesture";
import { gestureActions } from "../../store/features/Gesture";
import { scoreActions } from "../../store/features/Score";

import { HOUSE, PLAYER } from "../../constant/Participant";
import { gestureSliceName } from "../../store/features/Gesture";

import "./House.style.scss";

function House() {
  const { houseGesture, gesture, winner } = useSelector(
    (state) => state[gestureSliceName]
  );

  const dispatch = useDispatch();

  const { houseGestureUpdated, gestureAnimationEnded, winnerDecided } =
    bindActionCreators(gestureActions, dispatch);
  const { scoreIncreasedByOne, scoreDecreasedByOne } = bindActionCreators(
    scoreActions,
    dispatch
  );

  useEffect(() => {
    winnerDecided(getWinner(gesture, houseGesture));
    winner === HOUSE && scoreDecreasedByOne();
    winner === PLAYER && scoreIncreasedByOne();
  }, [gesture, houseGesture, winner]);

  const onSelectedAnimationEnd = () => {
    gestureAnimationEnded();
    houseGestureUpdated(getRandomGesture(SCISSORS, ROCK, PAPER));
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
