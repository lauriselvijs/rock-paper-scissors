import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { gameActions } from "../../store/features/Game";

import styles from "./PlayAgainBtn.style.module.scss";

const PlayAgainBtn = () => {
  const dispatch = useDispatch();

  const { screenUpdatedToMenu } = bindActionCreators(gameActions, dispatch);

  const onBtnClick = () => {
    screenUpdatedToMenu();
  };

  return (
    <button onClick={onBtnClick} className={styles.playAgainBtn}>
      PLAY AGAIN
    </button>
  );
};

export default PlayAgainBtn;
