import { SHOW_MODAL } from "./HelpModal.action.type";

const initialState = {
  modalOpen: false,
};

const HelpModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
};

export default HelpModalReducer;
