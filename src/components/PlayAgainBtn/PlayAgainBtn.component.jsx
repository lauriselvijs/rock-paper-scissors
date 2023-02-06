import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { gameActions } from "../../store/features/Game";

import "./PlayAgainBtn.style.scss";

function PlayAgainBtn() {
  const dispatch = useDispatch();

  const { screenUpdatedToMenu } = bindActionCreators(gameActions, dispatch);

  const onPlayAgainBtnClick = () => {
    screenUpdatedToMenu();
  };

  return (
    <button onClick={onPlayAgainBtnClick} className="play-again-btn">
      PLAY AGAIN
    </button>
  );
}

export default PlayAgainBtn;
