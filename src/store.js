import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {Filters} from './actions/types';
import rootReducer from './reducers/root';

const defaultState = {
  visibilityFilter: Filters.SHOW_ALL,
  todos: [
    {id: 0, text: 'Run Redux', completed: true}
  ]
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
