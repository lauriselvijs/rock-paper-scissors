import React from "react";
import "./RulesBtn.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { HelpModalActions } from "../../store/action";

const RulesBtn = () => {
  const modalOpen = useSelector((state) => state.helpModal.modalOpen);

  const dispatch = useDispatch();
  const { setModalOpen } = bindActionCreators(HelpModalActions, dispatch);

  console.log(modalOpen);

  const onRulesClick = () => {
    setModalOpen();
  };

  return (
    <button onClick={onRulesClick} className="rules">
      RULES
    </button>
  );
};

export default RulesBtn;
