import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ANIMATION_LENGTH } from "../../config/GameAnimation.config";
import { GESTURE_SRC } from "../../constant/Gesture";
import { gameSliceName } from "../../store/features/Game";
import { getRandomGesture } from "../../util/Game";

import { FRAME_LENGTH } from "./House.config";

export const useGestureImage = () => {
  const { houseGesture } = useSelector((state) => state[gameSliceName]);

  const [src, setSrc] = useState(GESTURE_SRC[getRandomGesture()]);

  useEffect(() => {
    let intervalId = null;

    intervalId = setInterval(() => {
      setSrc(GESTURE_SRC[getRandomGesture()]);
    }, FRAME_LENGTH);

    setTimeout(() => {
      clearInterval(intervalId);
      setSrc(GESTURE_SRC[houseGesture]);
    }, ANIMATION_LENGTH);

    return () => {
      clearInterval(intervalId);
    };
  }, [houseGesture]);

  return { src, houseGesture };
};
