import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// State
const defaultState = {};

// Addons
const enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // DevTools
];
const middleware = [thunk];

// Compose Addons
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// Final Store
const store = createStore(
  rootReducer,
  defaultState,
  composedEnhancers
);

export default store;
