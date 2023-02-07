import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ANIMATION_LENGTH } from "../../config/GameAnimation.config";
import { gameSliceName } from "../../store/features/Game";

import { getRandomGesture } from "../../util/Game";

import { FRAME_LENGTH, GESTURES_SRC } from "./House.config";

console.log(FRAME_LENGTH);

export const useGestureImage = () => {
  const { houseGesture } = useSelector((state) => state[gameSliceName]);

  const [src, setSrc] = useState(GESTURES_SRC[getRandomGesture()]);

  useEffect(() => {
    let intervalId = null;

    intervalId = setInterval(() => {
      setSrc(GESTURES_SRC[getRandomGesture()]);
    }, FRAME_LENGTH);

    setTimeout(() => {
      clearInterval(intervalId);
      setSrc(GESTURES_SRC[houseGesture]);
    }, ANIMATION_LENGTH);

    return () => {
      clearInterval(intervalId);
    };
  }, [houseGesture]);

  return { src, houseGesture };
};
