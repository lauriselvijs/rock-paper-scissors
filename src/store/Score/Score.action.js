import { SET_SCORE } from './Score.action.type';

export const setScore = (score = 0) => (dispatch) => {
  dispatch({ type: SET_SCORE, payload: score });
};
