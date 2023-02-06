import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { gameActions } from "../../store/features/Game";
import { HOUSE, PLAYER } from "../../constant/Participant";
import { gestureSliceName } from "../../store/features/Game";

import "./House.style.scss";

function House() {
  const { houseGesture, gesture, winner } = useSelector(
    (state) => state[gestureSliceName]
  );

  const dispatch = useDispatch();
  const {
    gestureAnimationEnded,
    winnerDecided,
    scoreIncreasedByOne,
    scoreDecreasedByOne,
  } = bindActionCreators(gameActions, dispatch);

  useEffect(() => {
    winnerDecided(gesture, houseGesture);
    winner === HOUSE && scoreDecreasedByOne();
    winner === PLAYER && scoreIncreasedByOne();
  }, [gesture, houseGesture, winner]);

  const onSelectedAnimationEnd = () => {
    gestureAnimationEnded();
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
