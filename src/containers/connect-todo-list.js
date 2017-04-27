import {connect} from 'react-redux';
import {toggleTodo} from '../actions/actions';
import {Filters} from '../actions/types';
import TodoList from '../components/todo-list';

// Filters
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case Filters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown Filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  loading: state.loading
});

const mapDispatchToProps = {
  toggleTodo
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ConnectTodoList;
