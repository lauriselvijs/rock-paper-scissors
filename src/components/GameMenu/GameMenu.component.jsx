import triangle from "../../asset/icons/bg-triangle.svg";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import "./GameMenu.style.scss";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { gameActions } from "../../store/features/Game";
import { PAPER, ROCK, SCISSORS } from "../../constant/Gesture";

function SelectMenu() {
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
