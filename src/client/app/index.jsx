import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import App from 'scripts/App.jsx';

render(<Router history = { browserHistory }>
  <Route path = "/" component = { App } />
  </Router>, document.getElementById('app'));
//render(<App />, document.getElementById('app'));
