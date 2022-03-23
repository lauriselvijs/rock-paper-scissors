import { SET_SCORE } from './Score.action.type';

const initialState = {
  score: 0,
};

const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      return state;
  }
};

export default ScoreReducer;
