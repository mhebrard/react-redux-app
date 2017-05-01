import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import loading from './loading';
import todos from './todos';
import visibilityFilter from './visibility-filter';

const rootReducer = combineReducers({
  loading,
  todos,
  visibilityFilter,
  routing: routerReducer
});

export default rootReducer;
