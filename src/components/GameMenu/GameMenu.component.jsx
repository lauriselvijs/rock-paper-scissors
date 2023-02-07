import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import triangle from "../../asset/icons/bg-triangle.svg";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import { gameActions } from "../../store/features/Game";
import { PAPER, ROCK, SCISSORS } from "../../constant/Gesture";

import styles from "./GameMenu.style.module.scss";

const SelectMenu = () => {
  const dispatch = useDispatch();

  const { gameUpdatedWithPlayerGesture } = bindActionCreators(
    gameActions,
    dispatch
  );

  const onPaperClick = () => {
    gameUpdatedWithPlayerGesture(PAPER);
  };

  const onScissorsClick = () => {
    gameUpdatedWithPlayerGesture(SCISSORS);
  };

  const onRockClick = () => {
    gameUpdatedWithPlayerGesture(ROCK);
  };

  return (
    <div className={styles.gameMenu}>
      <img src={triangle} alt="Triangle" className={styles.triangle} />
      <img
        src={paper}
        onClick={onPaperClick}
        alt="Paper"
        className={styles.paper}
      />
      <img
        src={scissors}
        onClick={onScissorsClick}
        alt="Scissors"
        className={styles.scissors}
      />
      <img
        src={rock}
        onClick={onRockClick}
        alt="Rock"
        className={styles.rock}
      />
    </div>
  );
};

export default SelectMenu;
