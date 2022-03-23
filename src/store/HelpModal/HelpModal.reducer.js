import { SHOW_MODAL, SHOW_ANIMATION } from './HelpModal.action.type';

const initialState = {
  modalOpen: false,
  animationEnd: false,
};

const HelpModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    case SHOW_ANIMATION:
      return {
        ...state,
        animationEnd: action.payload,
      };
    default:
      return state;
  }
};

export default HelpModalReducer;
