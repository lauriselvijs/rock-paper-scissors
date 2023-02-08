import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { gameReducer, gameSliceName } from "../features/Game";
import { rulesModalSliceName, rulesModalReducer } from "../features/RulesModal";

const persistConfig = {
  key: "game",
  storage: storage,
  whitelist: ["score"],
};

const reducers = {
  [gameSliceName]: persistReducer(persistConfig, gameReducer),
  [rulesModalSliceName]: rulesModalReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
