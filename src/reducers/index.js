import {combineReducers} from '../lib/redux';
import counter from './counter';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  loading
});

export default rootReducer;
