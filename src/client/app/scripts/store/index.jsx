import { createStore } from 'redux';
import rootReducer from 'scripts/reducers/index.jsx';
import defaultStore from 'scripts/store/defaultStore.jsx';

let store = createStore(rootReducer, {});

export default store;
