import { SET_SCORE } from "./Score.action.type";

const initialState = {
  score: 0,
};

const HelpModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: state.score > 0 && state.score + action.payload,
      };
    default:
      return state;
  }
};

export default HelpModalReducer;
