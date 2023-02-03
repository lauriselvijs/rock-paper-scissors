import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { gestureReducer, gestureSliceName } from "../features/Gesture";
import { scoreReducer, scoreSliceName } from "../features/Score";
import { helpModalSliceName, helpModalReducer } from "../features/HelpModal";

const scoreReducerConfig = {
  key: "score",
  storage,
};

const reducers = {
  [gestureSliceName]: gestureReducer,
  [helpModalSliceName]: helpModalReducer,
  [scoreSliceName]: persistReducer(scoreReducerConfig, scoreReducer),
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
