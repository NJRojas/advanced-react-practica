import { AUTH_LOGIN, AUTH_LOGOUT, ADS_LOADED } from './types';

const initialState = {
  auth: false,
  ads: [],
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ads(state = initialState.ads, action) {
  if (action.type === ADS_LOADED) {
    return action.payload;
  }
  return state;
}
