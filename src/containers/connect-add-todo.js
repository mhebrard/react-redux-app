import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import AddTodo from '../components/add-todo';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const input = e.target.querySelector('input');
      dispatch(addTodo(input.value));
      input.value = '';
    }
  };
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default ConnectTodoList;
