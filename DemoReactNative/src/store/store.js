import { createStore } from 'redux';
import rootReducers from './reducers/index';

function getStore() {
  return createStore(rootReducers);
}

const store = getStore();

export default store;
