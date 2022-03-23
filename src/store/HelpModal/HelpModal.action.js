import { SHOW_MODAL, SHOW_ANIMATION } from './HelpModal.action.type';

export const setModalOpen = (open = true) => (dispatch) => {
  dispatch({ type: SHOW_MODAL, payload: open });
};

export const setShowAnimation = (show = true) => (dispatch) => {
  dispatch({ type: SHOW_ANIMATION, payload: show });
};
