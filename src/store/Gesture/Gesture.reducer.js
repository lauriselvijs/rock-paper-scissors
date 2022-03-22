import { SET_GESTURE_ACTION } from "./Gesture.action.type";

const initialState = {
  gesture: "paper",
};

const GestureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GESTURE_ACTION:
      return {
        ...state,
        gesture: action.payload,
      };
    default:
      return state;
  }
};

export default GestureReducer;
