import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// State
const defaultState = {};

// Addons
const enhancers = [];
const middleware = [thunk];

// DevTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (devTools !== undefined) {
  enhancers.push(devTools);
}
console.log('activate react devtools:', 'require(\'electron-react-devtools\').install()');
console.log('activate redux devtools:', 'require(\'electron-redux-devtools\').install()');

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
