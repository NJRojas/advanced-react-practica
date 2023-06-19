import { AUTH_LOGIN, AUTH_LOGOUT, ADS_LOADED } from './types';

const defaultState = {
  auth: false,
  ads: [],
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ads(state = defaultState.ads, action) {
  if (action.type === ADS_LOADED) {
    return action.payload;
  }
  return state;
}
