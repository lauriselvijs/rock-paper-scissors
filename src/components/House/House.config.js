import { PAPER, ROCK, SCISSORS } from "../../constant/Gesture";
import paper from "../../asset/icons/paper.svg";
import scissors from "../../asset/icons/scissors.svg";
import rock from "../../asset/icons/rock.svg";
import { ANIMATION_LENGTH } from "../../config/GameAnimation.config";

export const GESTURES_SRC = Object.freeze({
  [PAPER]: paper,
  [SCISSORS]: scissors,
  [ROCK]: rock,
});

export const ANIMATION_ITERATION_COUNT = 30;
export const FRAME_LENGTH = ANIMATION_LENGTH / ANIMATION_ITERATION_COUNT;
