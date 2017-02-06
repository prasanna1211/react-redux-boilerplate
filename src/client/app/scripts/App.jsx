/*
 * Dummy component
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

class App extends React.Component {

	componentWillMount() {
		this.props.dummyAction.fetchDataFromServer();
	}

  render() {
  	var map1 = Immutable.Map({ a: 1, b : [2, 3]});
    var map2 = map1.set('b', [3, 4]);
    console.log(map2.toJS());
    return (
      <div>
        Successfully loaded React Project
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dummyReducer : state.dummyReducer
});

const mapDispatchToProps = (dispatch) => ({
  dummyAction : bindActionCreators(dummyActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
