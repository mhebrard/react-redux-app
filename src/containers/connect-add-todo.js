import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import AddTodo from '../components/add-todo';

// Map stat
// const mapStateToProps = state => ({
//
// });

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  addTodo
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default ConnectTodoList;
