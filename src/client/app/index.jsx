/*
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'scripts/store/index.jsx';
import Routes from 'scripts/routes/index.jsx';

/*
 * Import the styles
 */
require('styles/index.scss');

/*
 * Renders the app with the target container
 */
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'));
