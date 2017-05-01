import {connect} from 'react-redux';
import {addTodo, setVisibilityFilter, toggleTodo} from '../actions/index';
import {Filters} from '../actions/types';
import TodoApp from '../components/todo-app';

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
  filters: Filters,
  loading: state.loading,
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  addOnSubmit: e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    dispatch(addTodo(input.value));
    input.value = '';
  },
  filterOnClick: f => dispatch(setVisibilityFilter(f)),
  todoOnClick: id => dispatch(toggleTodo(id))
});

const TodoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoAppContainer;
