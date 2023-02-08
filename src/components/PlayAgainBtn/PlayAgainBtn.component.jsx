import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { gameActions, gameSliceName } from "../../store/features/Game";

import styles from "./PlayAgainBtn.style.module.scss";

const PlayAgainBtn = () => {
  const { loading } = useSelector((state) => state[gameSliceName]);

  const dispatch = useDispatch();
  const { screenUpdatedToMenu } = bindActionCreators(gameActions, dispatch);

  const onBtnClick = () => {
    screenUpdatedToMenu();
  };

  if (loading) {
    return null;
  }

  return (
    <button onClick={onBtnClick} className={styles.playAgainBtn}>
      PLAY AGAIN
    </button>
  );
};

export default PlayAgainBtn;
