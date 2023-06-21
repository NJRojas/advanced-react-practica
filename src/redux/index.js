import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import * as actionCreators from './actions';

import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools({
  actionCreators,
});

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, composeEnhancers());
  return store;
}
