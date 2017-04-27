import {Todos, VisibilityFilter} from './types';

let nextTodoId = 0;
export function addTodo(text) {
  return {
    type: Todos.ADD_TODO,
    id: ++nextTodoId,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: Todos.TOGGLE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: VisibilityFilter.SET_VISIBILITY_FILTER,
    filter
  };
}
