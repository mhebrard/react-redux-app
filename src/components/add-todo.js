import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({onSubmit}) => (
  <div>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        />
      <button type="submit">
        Add todo
      </button>
    </form>
  </div>
);

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddTodo;
