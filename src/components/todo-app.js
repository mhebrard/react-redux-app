import React, {Component} from 'react';
import ConnectAddTodo from '../containers/connect-add-todo';
import ConnectTodoList from '../containers/connect-todo-list';
import ConnectFooter from '../containers/connect-footer';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <ConnectAddTodo/>
        <ConnectTodoList/>
        <ConnectFooter/>
      </div>
    );
  }
}

export default TodoApp;
