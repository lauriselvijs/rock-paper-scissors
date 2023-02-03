import { useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { MENU_SCREEN } from "../../constant/GameScreen";
import { gestureActions } from "../../store/features/Gesture";

import "./PlayAgainBtn.style.scss";

function PlayAgainBtn() {
  const dispatch = useDispatch();

  const {
    screenUpdated,
    gestureAnimationEnded,
    houseGestureReset,
    winnerReset,
  } = bindActionCreators(gestureActions, dispatch);

  const onPlayAgainBtnClick = () => {
    screenUpdated(MENU_SCREEN);
    gestureAnimationEnded();
    houseGestureReset();
    winnerReset();
  };

  return (
    <button onClick={onPlayAgainBtnClick} className="play-again-btn">
      PLAY AGAIN
    </button>
  );
}

export default PlayAgainBtn;
