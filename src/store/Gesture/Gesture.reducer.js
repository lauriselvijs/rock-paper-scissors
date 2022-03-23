import {
  SET_GESTURE_ACTION,
  SET_GAME_SCREEN,
  SET_HOUSE_GESTURE,
  SET_GESTURE_ANIMATION_END,
  SET_WINNER,
} from './Gesture.action.type';

const initialState = {
  gesture: '',
  houseGesture: '',
  gameScreen: 0,
  showAnimation: false,
  winner: '',
};

const GestureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GESTURE_ACTION:
      return {
        ...state,
        gesture: action.payload,
      };
    case SET_GAME_SCREEN:
      return {
        ...state,
        gameScreen: action.payload,
      };
    case SET_HOUSE_GESTURE:
      return {
        ...state,
        houseGesture: action.payload,
      };
    case SET_GESTURE_ANIMATION_END:
      return {
        ...state,
        showAnimation: action.payload,
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    default:
      return state;
  }
};

export default GestureReducer;
