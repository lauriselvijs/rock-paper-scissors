import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { ScoreActions } from "../../store/action";

import "./Score.style.scss";

function Score() {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();
  const { scoreReset } = bindActionCreators(ScoreActions, dispatch);

  const onScoreClick = () => {
    scoreReset();
  };

  return (
    <div
      aria-label="Click to reset score"
      className="score"
      title="Click to reset"
      onClick={onScoreClick}
    >
      <div className="score-text">SCORE</div>
      <div className="score-result">{score}</div>
    </div>
  );
}

export default Score;
