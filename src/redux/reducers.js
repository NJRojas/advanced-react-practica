import { AUTH_LOGIN, AUTH_LOGOUT, ADS_LOADED } from './types';

const defaultState = {
  auth: false,
  ads: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        auth: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        auth: false,
      };
    case ADS_LOADED:
      return {
        ...state,
        ads: action.payload,
      };
    default:
      return state;
  }
}
