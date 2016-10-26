import React from 'react';
import {render} from 'react-dom';
var x = () => {
  console.log(" this should work ");
}
class App extends React.Component {
  render () {
    x();
    return (
      <p> this is simple </p>
    );
  }
}

render(<App/>, document.getElementById('app'));
