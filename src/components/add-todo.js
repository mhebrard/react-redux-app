import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            />
          <button type="submit">
            Add todo
          </button>
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(e.target.querySelector('input').value);
    e.target.querySelector('input').value = '';
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
