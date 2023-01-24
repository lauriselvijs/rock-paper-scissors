import { UPDATE_SCORE, RESET_SCORE } from "./Score.config";

export const scoreUpdated =
  (score = 0) =>
  (dispatch) => {
    dispatch({ type: UPDATE_SCORE, payload: score });
  };

export const scoreReset = () => (dispatch) => {
  dispatch({ type: RESET_SCORE });
};
