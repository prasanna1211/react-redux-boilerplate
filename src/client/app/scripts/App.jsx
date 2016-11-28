/*
 * Dummy component
 */
import React from 'react';
import { dummyActionCreators } from 'scripts/actions/index.jsx';

class App extends React.Component {
  render() {
  	dummyActionCreators.fetchDataFromServer();
    return (
      <div>
        Successfully loaded React Project
      </div>
    );
  }
}

export default App;
