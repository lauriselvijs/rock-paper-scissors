import { combineReducers } from "redux";
import gestureReducer from "./Gesture/Gesture.reducer";
import helpModalReducer from "./HelpModal/HelpModal.reducer";
import scoreReducer from "./Score/Score.reducer";

const reducers = combineReducers({
  gesture: gestureReducer,
  helpModal: helpModalReducer,
  score: scoreReducer,
});

export default reducers;
