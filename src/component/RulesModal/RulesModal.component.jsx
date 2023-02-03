import "./RulesModal.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import closeIcon from "../../asset/icons/icon-close.svg";
import rulesImg from "../../asset/icons/image-rules.svg";
import {
  helpModalActions,
  helpModalSliceName,
} from "../../store/features/HelpModal";

function RulesModal() {
  const { modalOpen, showAnimation } = useSelector(
    (state) => state[helpModalSliceName]
  );
  const dispatch = useDispatch();

  const { modalClosed, animationStarted, animationEnded } = bindActionCreators(
    helpModalActions,
    dispatch
  );

  const onCloseBtnClick = () => {
    animationStarted();
  };

  const onModalAnimationEnd = () => {
    if (showAnimation) {
      animationEnded();
      modalClosed();
    }
  };

  return (
    <div
      className={showAnimation ? "rules-modal-close" : "rules-modal"}
      onAnimationEnd={onModalAnimationEnd}
      style={{ display: modalOpen ? "flex" : "none" }}
    >
      <div className="rules-modal-content">
        <h1 className="rules-title">RULES</h1>
        <img src={rulesImg} alt="How to play" className="rules-img" />
        <img
          onClick={onCloseBtnClick}
          src={closeIcon}
          alt="Close icon"
          className="close-icon"
        />
      </div>
    </div>
  );
}

export default RulesModal;
