import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gestureReducer from './Gesture/Gesture.reducer';
import helpModalReducer from './HelpModal/HelpModal.reducer';
import scoreReducer from './Score/Score.reducer';

const scoreReducerConfig = {
  key: 'score',
  storage,
};

const reducers = combineReducers({
  gesture: gestureReducer,
  helpModal: helpModalReducer,
  score: persistReducer(scoreReducerConfig, scoreReducer),
});

export default reducers;
