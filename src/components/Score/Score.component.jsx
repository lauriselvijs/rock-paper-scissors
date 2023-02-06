import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import logo from "../../asset/icons/logo.svg";

import "./Score.style.scss";
import { gameActions, gameSliceName } from "../../store/features/Game";

function Score() {
  const { score } = useSelector((state) => state[gameSliceName]);

  const dispatch = useDispatch();

  const { scoreReset } = bindActionCreators(gameActions, dispatch);

  const onScoreClick = () => {
    scoreReset();
  };

  return (
    <div className="score">
      <img className="game-logo" src={logo} alt="Logo" />
      <button
        aria-label="Click to reset score"
        className="score-btn"
        title="Click to reset"
        onClick={onScoreClick}
      >
        <div className="score-btn-text">SCORE</div>
        <div className="score-btn-result">{score}</div>
      </button>
    </div>
  );
}

export default Score;
