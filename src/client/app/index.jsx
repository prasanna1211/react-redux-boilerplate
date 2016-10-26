import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <p> this is simple </p>
    );
  }
}

render(<Router history = { browserHistory }>
  <Route path = "/" component = { App } />
  </Router>, document.getElementById('app'));
