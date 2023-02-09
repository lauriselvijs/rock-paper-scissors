import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { GESTURE_SRC } from "../../constant/Gesture";
import { gameSliceName } from "../../store/features/Game";
import { getRandomGesture } from "../../util/Game";
import { gameActions } from "../../store/features/Game";
import { getWinner } from "../../util/Game";

import { ANIMATION_LENGTH, FRAME_LENGTH } from "./House.config";
import { HOUSE } from "../../constant/Participant";

export const useHouse = () => {
  const { playerGesture, winner } = useSelector(
    (state) => state[gameSliceName]
  );
  const [gestureSrc, setGestureSrc] = useState(GESTURE_SRC[getRandomGesture()]);
  const [gesture, setGesture] = useState();
  const [isWinner, setIsWinner] = useState(false);

  const dispatch = useDispatch();
  const { gameResultUpdated } = bindActionCreators(gameActions, dispatch);

  useEffect(() => {
    let intervalId = null;

    const startAnimation = () => {
      setGestureSrc(GESTURE_SRC[getRandomGesture()]);
    };

    const endAnimation = () => {
      clearInterval(intervalId);

      //
      // [ ] - Replace with one util function where all the house logic is in
      const houseGesture = getRandomGesture();

      //TODO:
      // [ ] - Replace with one setState by GESTURE_SRC adding alt attribute
      setGesture(houseGesture);
      setGestureSrc(GESTURE_SRC[houseGesture]);

      const winner = getWinner(playerGesture, houseGesture);
      setIsWinner(winner === HOUSE);
      gameResultUpdated(winner);
    };

    intervalId = setInterval(startAnimation, FRAME_LENGTH);
    const timeoutId = setTimeout(endAnimation, ANIMATION_LENGTH);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [playerGesture]);

  return { gestureSrc, gesture, winner, isWinner };
};
