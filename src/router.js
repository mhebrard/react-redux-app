import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import App from './app';
import Button from './components/button';
import TodoApp from './components/todo-app';

const defaultRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Button}/>
        <Route path="/todoapp" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>
);

export default defaultRouter;
