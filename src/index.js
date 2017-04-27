import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {Request} from './actions/types';
import App from './app';
import Button from './components/button';
import TodoApp from './components/todo-app';
/* eslint-disable import/no-unassigned-import */
import './index.css';
/* eslint-enable */

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Button}/>
        <Route path="/todoapp" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);

store.dispatch({type: Request.GET_TODO});
