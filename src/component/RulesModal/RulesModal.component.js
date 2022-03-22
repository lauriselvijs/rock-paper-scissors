import React, { useState } from "react";
import "./RulesModal.style.scss";
import closeIcon from "../../asset/images/icon-close.svg";
import rulesImg from "../../asset/images/image-rules.svg";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { HelpModalActions } from "../../store/action";

const RulesModal = () => {
  const modalOpen = useSelector((state) => state.helpModal.modalOpen);

  const dispatch = useDispatch();
  const { setModalOpen } = bindActionCreators(HelpModalActions, dispatch);

  const onCloseBtnClick = () => {
    setModalOpen();
  };

  console.log(modalOpen);

  return (
    <div
      className={modalOpen ? "rules-modal" : "rules-modal-close"}
      // onAnimationEnd={{ display: closeModal ? "block" : "none" }}
      // style={{ display: modalOpen ? "block" : "none" }}
    >
      <div className="rules-modal-content">
        <div className="modal-header">
          <h1 className="rules-title">RULES</h1>
          <img
            onClick={onCloseBtnClick}
            src={closeIcon}
            alt="Close icon"
            className="close-icon"
          />
        </div>
        <img src={rulesImg} alt="How to play" className="rules-img" />
      </div>
    </div>
  );
};

export default RulesModal;
