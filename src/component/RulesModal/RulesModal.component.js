import React from "react";
import "./RulesModal.style.scss";
import closeIcon from "../../asset/images/icon-close.svg";
import rulesImg from "../../asset/images/image-rules.svg";

const RulesModal = () => {
  return (
    <div className="rules-modal">
      <div className="rules-modal-content">
        <div className="modal-header">
          <h1 className="rules-title">RULES</h1>
          <img src={closeIcon} alt="Close icon" className="close-icon" />
        </div>
        <img src={rulesImg} alt="How to play" className="rules-img" />
      </div>
    </div>
  );
};

export default RulesModal;
