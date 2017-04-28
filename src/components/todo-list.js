import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({todos, todoOnClick, loading}) => (
  <div>
    {loading ? 'loading...' : ''}
    <ul>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={todoOnClick}
            />
        );
      })}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired),
  todoOnClick: PropTypes.func,
  loading: PropTypes.bool
};

TodoList.defaultProps = {
  todos: [{
    id: 0,
    completed: false,
    text: 'default todo'
  }],
  todoOnClick: () => {
    console.log('todoOnClick');
  },
  loading: false
};

export default TodoList;
