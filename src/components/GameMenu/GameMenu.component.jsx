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
      <button
        aria-label="Paper"
        className={styles.paper}
        onClick={onPaperClick}
      >
        <img src={paper} alt="Paper" width={107} height={110} />
      </button>
      <button
        aria-label="Scissors"
        className={styles.scissors}
        onClick={onScissorsClick}
      >
        <img src={scissors} alt="Scissors" width={107} height={110} />
      </button>
      <button aria-label="Rock" className={styles.rock} onClick={onRockClick}>
        <img src={rock} alt="Rock" width={107} height={110} />
      </button>
    </div>
  );
};

export default SelectMenu;
