import request from 'axios';
import * as s from '../selectors';
import * as t from './action-types';

// Request manager
export function requestPokemon(mode) {
  return (dispatch, getState) => {
    // Select url
    let url;
    switch (mode) {
      case 'prev':
        url = s.pokemonPreviousSelector(getState());
        break;
      case 'next':
        url = s.pokemonNextSelector(getState());
        break;
      default:
        url = 'https://pokeapi.co/api/v2/pokemon';
    }
    // Notification
    dispatch({type: t.FETCH, payload: url});
    // Request
    return fetchPokemon(url).then(
      response => {
        dispatch({type: t.SUCCESS, payload: {response}});
      },
      error => {
        dispatch({type: t.FAILURE, payload: {error}});
      }
    );
  };
}

// Request manager template
export function requestOther() {
  // Notification
  // dispatch();
  // return fetch.then(
  // response => {
  //  dispatch({type: t.SUCCESS, payload: {response}});
  // },
  // error => {
  //  dispatch({type: t.FAILURE, payload: {error}});
  // }
  // )
}

// API Call
function fetchPokemon(url) {
  const method = 'get'; // Or 'post'
  // Get params are an object: query.params={key: value}
  // Post data are an object: query.data= {key: value}
  const query = {method, url, crossdomain: true}; // Add param or data
  // Query
  return request(query);
}
