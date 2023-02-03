import triangle from "../../asset/icons/bg-triangle.svg";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import "./SelectMenu.style.scss";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { SCISSORS, ROCK, PAPER } from "../../constant/Gesture";
import { GAME_SCREEN } from "../../constant/GameScreen";
import { gestureActions } from "../../store/features/Gesture";

function SelectMenu() {
  const dispatch = useDispatch();

  const { screenUpdated, gestureUpdated } = bindActionCreators(
    gestureActions,
    dispatch
  );

  const onPaperClick = () => {
    screenUpdated(GAME_SCREEN);
    gestureUpdated(PAPER);
  };

  const onScissorsClick = () => {
    screenUpdated(GAME_SCREEN);
    gestureUpdated(SCISSORS);
  };

  const onRockClick = () => {
    screenUpdated(GAME_SCREEN);
    gestureUpdated(ROCK);
  };

  return (
    <div className="select-menu">
      <img src={triangle} alt="Triangle" className="triangle" />
      <img src={paper} onClick={onPaperClick} alt="Paper" className="paper" />
      <img
        src={scissors}
        onClick={onScissorsClick}
        alt="Scissor"
        className="scissors"
      />
      <img src={rock} onClick={onRockClick} alt="Rock" className="rock" />
    </div>
  );
}

export default SelectMenu;
