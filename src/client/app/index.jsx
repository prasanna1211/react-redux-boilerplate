/*
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import Routes from 'scripts/routes/index.jsx';

/*
 * Import the styles
 */
require('styles/index.scss');

/*
 * Renders the app with the target container  
 */
render(<Routes />, document.getElementById('app'));
