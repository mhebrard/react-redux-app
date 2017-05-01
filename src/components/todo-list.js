import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({todos, todoOnClick, loading}) => (
  <div>
    {loading ? <h3>loading...</h3> : ''}
    <ul>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            todoOnClick={todoOnClick}
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
  }).isRequired).isRequired,
  todoOnClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
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
