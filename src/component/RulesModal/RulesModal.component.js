import React from "react";
import "./RulesModal.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import closeIcon from "../../asset/images/icon-close.svg";
import rulesImg from "../../asset/images/image-rules.svg";
import { HelpModalActions } from "../../store/action";

function RulesModal() {
  const modalOpen = useSelector((state) => state.helpModal.modalOpen);
  const animationEnd = useSelector((state) => state.helpModal.animationEnd);

  const dispatch = useDispatch();
  const { setModalOpen, setShowAnimation } = bindActionCreators(
    HelpModalActions,
    dispatch
  );

  const onCloseBtnClick = () => {
    setShowAnimation(true);
  };

  const onModalAnimationEnd = () => {
    if (animationEnd) {
      setShowAnimation(false);
      setModalOpen(false);
    }
  };

  return (
    <div
      className={animationEnd ? "rules-modal-close" : "rules-modal"}
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
