import {Request} from '../actions/types';

const loading = (state = false, action) => {
  switch (action.type) {
    case Request.GET_TODO:
      return true;
    case Request.GET_TODO_RESPONSE:
      return false;
    case Request.GET_TODO_ERROR:
      return false;
    default:
      return state;
  }
};

export default loading;
