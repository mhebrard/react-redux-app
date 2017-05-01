import React, {Component} from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo {...this.props}/>
        <TodoList {...this.props}/>
        <Footer {...this.props}/>
      </div>
    );
  }
}

export default TodoApp;
