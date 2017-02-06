/*
 * Creates a store with root Reducer( extracted from combine reducer)
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'scripts/reducers/index.jsx';
import createLogger from 'redux-logger';

// Logger for redux actions and actioncreators on console
const reduxLogger = createLogger();

/*
 * Single store for the entire app
 * Middleware chain thunk -> reduxLoggers.
 */
const store = createStore(rootReducer, applyMiddleware(thunk, reduxLogger));

export default store;
