import "./GameResultWrapper.style.scss";
import PropTypes from "prop-types";

function GameResultWrapper({ children }) {
  return <div className="game-info">{children}</div>;
}

GameResultWrapper.propTypes = {
  children: PropTypes.node,
};

export default GameResultWrapper;
