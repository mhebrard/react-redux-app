import {VisibilityFilter, Filters} from '../actions/types';

const visibilityFilter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case VisibilityFilter.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
