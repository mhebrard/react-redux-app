import {Todos, VisibilityFilter} from './types';

export function addTodo(text) {
  return {
    type: Todos.ADD_TODO,
    text
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: VisibilityFilter.SET_VISIBILITY_FILTER,
    filter
  };
}

export function toggleTodo(id) {
  return {
    type: Todos.TOGGLE_TODO,
    id
  };
}
