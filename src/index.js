import React from 'react';
import ReactDOM from 'react-dom';
// Import App from './app';
import Root from './root';
import registerServiceWorker from './register-service-worker';
/* eslint-disable import/no-unassigned-import */
import './index.css';
/* eslint-enable */

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
