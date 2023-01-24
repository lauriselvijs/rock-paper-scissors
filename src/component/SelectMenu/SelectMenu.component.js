import triangle from "../../asset/images/bg-triangle.svg";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";
import "./SelectMenu.style.scss";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { GestureActions } from "../../store/action";
import { Gestures } from "../../constant/Gesture";
import { GameScreen } from "../../constant/GameScreen";

const { SCISSORS, ROCK, PAPER } = Gestures;
const { GAME_SCREEN } = GameScreen;

function SelectMenu() {
  const dispatch = useDispatch();
  const { setGameScreen, setGesture } = bindActionCreators(
    GestureActions,
    dispatch
  );

  const onPaperClick = () => {
    setGameScreen(GAME_SCREEN);
    setGesture(PAPER);
  };

  const onScissorsClick = () => {
    setGameScreen(GAME_SCREEN);
    setGesture(SCISSORS);
  };

  const onRockClick = () => {
    setGameScreen(GAME_SCREEN);
    setGesture(ROCK);
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
