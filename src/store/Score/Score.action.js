import { SET_SCORE } from "./Score.action.type";

export const setModalOpen =
  (score = 0) =>
  (dispatch) => {
    dispatch({ type: SET_SCORE, payload: score });
  };
