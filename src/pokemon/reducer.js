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
        return {num: Number(id), name: p.name, url: p.url};
      });
      // Erase previous list with new
      return {...state,
        items,
        previous: data.previous,
        next: data.next
      };
    }
    case t.FAILURE: {
      const error = action.payload.error;
      // Fake item to display error
      let name = 'ERROR';
      if (error.message) {
        name = error.message;
      }
      const items = [
        {num: 0, name, url: ''}
      ];

      return {...state,
        items,
        previous: null,
        next: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
