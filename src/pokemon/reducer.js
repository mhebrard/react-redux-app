import * as t from './action-types';

const defaultState = {
  items: [],
  previous: null,
  next: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.SUCCESS: {
      const data = action.payload.response.data;
      const items = data.results.map(p => {
        // Extract pokemon id
        const id = p.url.match(/\/([0-9]*)\/$/)[1];
        // Simple pokemon object
        return {num: id, name: p.name, url: p.url};
      });
      // Erase previous list with new
      return {...state,
        items,
        previous: data.previous,
        next: data.next
      };
    }
    default:
      return state;
  }
};

export default reducer;
