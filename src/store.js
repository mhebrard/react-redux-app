import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {Filters} from './actions/types';
import rootReducer from './reducers/root';
import dataService from './middlewares/data-service';

const defaultState = {
  loading: false,
  todos: [
    {id: 0, text: 'Define the store', completed: true}
  ],
  visibilityFilter: Filters.SHOW_ALL
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, defaultState, composeEnhancers(
    applyMiddleware(dataService)
  ));
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
