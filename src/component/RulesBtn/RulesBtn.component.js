import React from 'react';
import './RulesBtn.style.scss';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HelpModalActions } from '../../store/action';

function RulesBtn() {
  const dispatch = useDispatch();
  const { setModalOpen, setShowAnimation } = bindActionCreators(
    HelpModalActions,
    dispatch,
  );

  const onRulesClick = () => {
    setModalOpen(true);
    setShowAnimation(false);
  };

  return (
    <button onClick={onRulesClick} className="rules">
      RULES
    </button>
  );
}

export default RulesBtn;
