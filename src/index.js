import ReactDOM from 'react-dom';
import store from './store';
import {Request} from './actions/types';
import Router from './router';
/* eslint-disable import/no-unassigned-import */
import './index.css';
/* eslint-enable */

ReactDOM.render(
  Router,
  document.getElementById('root')
);

store.dispatch({type: Request.GET_TODO});
