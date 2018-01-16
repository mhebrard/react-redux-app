import * as t from './action-types';

const defaultState = {
  color: 'red'
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.SWITCH_COLOR:
      return {...state,
        color: action.payload};
    default:
      return state;
  }
};

export default reducer;
