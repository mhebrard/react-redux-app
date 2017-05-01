import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {todo} = this.props;
    return (
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}
        >
        {todo.text}
      </li>
    );
  }
  handleClick() {
    this.props.todoOnClick(this.props.todo.id);
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  todoOnClick: PropTypes.func.isRequired
};

export default Todo;
