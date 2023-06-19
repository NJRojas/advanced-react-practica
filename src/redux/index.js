import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import * as actionCreators from './actions';

import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools({
  actionCreators,
});

export default function configureStore() {
  const store = createStore(reducer, composeEnhancers());
  return store;
}
