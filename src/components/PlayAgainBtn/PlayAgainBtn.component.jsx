import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ANIMATION_LENGTH } from "../../config/GameAnimation";
import { useTimeout } from "../../hook/Timeout";

import { gameActions } from "../../store/features/Game";

import styles from "./PlayAgainBtn.style.module.scss";

const PlayAgainBtn = () => {
  const dispatch = useDispatch();

  const { screenUpdatedToMenu } = bindActionCreators(gameActions, dispatch);
  const timeoutEnded = useTimeout(ANIMATION_LENGTH);

  const onBtnClick = () => {
    screenUpdatedToMenu();
  };

  if (timeoutEnded) {
    return (
      <button onClick={onBtnClick} className={styles.playAgainBtn}>
        PLAY AGAIN
      </button>
    );
  }

  return null;
};

export default PlayAgainBtn;
