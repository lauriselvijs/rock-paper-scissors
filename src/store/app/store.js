import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { gameReducer, gameSliceName } from "../features/Gesture";
import { helpModalSliceName, helpModalReducer } from "../features/HelpModal";

const scoreReducerConfig = {
  key: "score",
  storage,
};

const reducers = {
  [gameSliceName]: persistReducer(scoreReducerConfig, gameReducer),
  [helpModalSliceName]: helpModalReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
