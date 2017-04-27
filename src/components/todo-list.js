import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

class TodoList extends Component {
  render() {
    const {todos, toggleTodo} = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onClick={toggleTodo}
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired),
  toggleTodo: PropTypes.func
};

TodoList.defaultProps = {
  todos: [{
    id: 0,
    completed: false,
    text: 'default todo'
  }],
  toggleTodo: () => {
    console.log('default');
  }
};

export default TodoList;
