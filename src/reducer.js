import {combineReducers} from 'redux';
// Reducers
import {reducer as pokemon} from './pokemon';
import {reducer as square} from './square';

const rootReducer = combineReducers({
  pokemon,
  square
});

export default rootReducer;
