import { SHOW_MODAL } from "./HelpModal.action.type";

export const setModalOpen = () => (dispatch) => {
  dispatch({ type: SHOW_MODAL });
};
