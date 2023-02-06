import { combineReducers } from "@reduxjs/toolkit";

import { gameReducer, gameSliceName } from "../features/Game";
import { rulesModalSliceName, rulesModalReducer } from "../features/RulesModal";

const reducers = {
  [gameSliceName]: gameReducer,
  [rulesModalSliceName]: rulesModalReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
