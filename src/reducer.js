import {combineReducers} from 'redux';
// Reducers
import {reducer as square} from './square';

const rootReducer = combineReducers({
  square
});

export default rootReducer;
