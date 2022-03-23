import React from 'react';
import './PlayAgainBtn.style.scss';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GestureActions } from '../../store/action';
import { GameScreen } from '../../constant/GameScreen';

const { MENU_SCREEN } = GameScreen;

function PlayAgainBtn() {
  const dispatch = useDispatch();
  const {
    setGameScreen, setGestureAnimationEnd, setHouseGesture, setWinner,
  } = bindActionCreators(GestureActions, dispatch);

  const onPlayAgainBtnClick = () => {
    setGameScreen(MENU_SCREEN);
    setGestureAnimationEnd(false);
    setHouseGesture('');
    setWinner('');
  };

  return (
    <button onClick={onPlayAgainBtnClick} className="play-again-btn">
      PLAY AGAIN
    </button>
  );
}

export default PlayAgainBtn;
