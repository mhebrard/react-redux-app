import React from 'react';
import ConnectAddTodo from '../containers/connect-add-todo';
import ConnectTodoList from '../containers/connect-todo-list';
import ConnectFooter from '../containers/connect-footer';

const TodoApp = () => (
  <div>
    <ConnectAddTodo/>
    <ConnectTodoList/>
    <ConnectFooter/>
  </div>
);

export default TodoApp;
