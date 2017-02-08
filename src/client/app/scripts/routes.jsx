/*
 * Define routes for the project.
 */
import React from 'react';
import { Router, browserHistory } from 'react-router';

// Composed routes for demo module
import DemoRoutes from 'scripts/modules/demo/routes.jsx';

const Routes = () => (
  <Router history={browserHistory}>
    { DemoRoutes }
  </Router>
);

export default Routes;
