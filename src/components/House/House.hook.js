import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { ANIMATION_LENGTH } from "../../config/GameAnimation";
import { GESTURE_SRC } from "../../constant/Gesture";
import { gameSliceName } from "../../store/features/Game";
import { getRandomGesture } from "../../util/Game";
import { gameActions } from "../../store/features/Game";
import { getWinner } from "../../util/Game";

import { FRAME_LENGTH } from "./House.config";

export const useHouse = () => {
  const { playerGesture } = useSelector((state) => state[gameSliceName]);
  const [gestureSrc, setGestureSrc] = useState(GESTURE_SRC[getRandomGesture()]);
  const [gesture, setGesture] = useState();

  const dispatch = useDispatch();
  const { gameResultUpdated } = bindActionCreators(gameActions, dispatch);

  useEffect(() => {
    let intervalId = null;

    intervalId = setInterval(() => {
      setGestureSrc(GESTURE_SRC[getRandomGesture()]);
    }, FRAME_LENGTH);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);

      const houseGesture = getRandomGesture();
      const winner = getWinner(playerGesture, houseGesture);

      gameResultUpdated(winner);

      setGesture(houseGesture);
      setGestureSrc(GESTURE_SRC[houseGesture]);
    }, ANIMATION_LENGTH);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [playerGesture]);

  return { gestureSrc, gesture };
};
