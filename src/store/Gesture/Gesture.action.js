import { SET_GESTURE_ACTION } from "./Gesture.action.type";

export const setGesture =
  (gesture = "paper") =>
  (dispatch) => {
    dispatch({ type: SET_GESTURE_ACTION, payload: gesture });
  };
