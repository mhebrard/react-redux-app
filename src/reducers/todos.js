import {Todos, Request} from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    case Todos.ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];
    case Todos.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({},
            todo,
            {completed: !todo.completed}
          );
        }
        return todo;
      });
    case Request.GET_TODO_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export default todos;
