import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({addOnSubmit}) => (
  <div>
    <form onSubmit={addOnSubmit}>
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
  addOnSubmit: PropTypes.func.isRequired
};

export default AddTodo;
