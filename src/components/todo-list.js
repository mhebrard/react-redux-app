import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

class TodoList extends Component {
  render() {
    const {todos, toggleTodo, loading} = this.props;
    return (
      <div>
        {loading ? 'loading...' : ''}
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
  toggleTodo: PropTypes.func,
  loading: PropTypes.bool
};

TodoList.defaultProps = {
  todos: [{
    id: 0,
    completed: false,
    text: 'default todo'
  }],
  toggleTodo: () => {
    console.log('default');
  },
  loading: false
};

export default TodoList;
