import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./RulesModal.config";
import state from "./RulesModal.state";

const rulesModal = createSlice({
  name: SLICE_NAME,
  initialState: state,
  reducers: {
    modalOpened: (state) => {
      state.modalOpen = true;
    },
    modalClosed: (state) => {
      state.modalOpen = false;
    },
  },
});

export const rulesModalActions = rulesModal.actions;
export const rulesModalReducer = rulesModal.reducer;
export const rulesModalSliceName = rulesModal.name;
