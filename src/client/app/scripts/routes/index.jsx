import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import App from 'scripts/App.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router history = { browserHistory }>
        <Route path = "/" component = { App } />
      </Router>
    );
  }
}

export default Routes;
