import React from 'react';
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
