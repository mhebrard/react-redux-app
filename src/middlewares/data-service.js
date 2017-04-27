import request from 'superagent';
import {Request} from '../actions/types';

// Generic request
const getApi = next => (route, name, key) => {
  request
  .get(route)
  .end((err, res) => {
    let out = '';
    if (err) {
      out = next({
        type: Request[`${name}_ERROR`],
        err
      });
    } else {
      const data = JSON.parse(res.text);
      out = next({
        type: Request[`${name}_RESPONSE`],
        data: data[key]
      });
    }
    return out;
  });
};

// Action consumer
const dataService = store => next => action => {
  next(action);
  const api = getApi(next);
  switch (action.type) {
    case Request.GET_TODO:
      api('/data/todos.json', Request.GET_TODO, 'todos');
      break;
    default:
      break;
  }
};

export default dataService;
