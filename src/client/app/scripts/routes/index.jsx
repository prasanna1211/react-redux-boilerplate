/*
 * Define routes for the project.
 */
import React from 'react';
import App from 'scripts/App.jsx';
import { Router, Route, browserHistory } from 'react-router';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

export default Routes;
