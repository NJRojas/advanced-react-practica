import { AUTH_LOGIN, ADS_LOADED } from './types';

export const authLogin = () => ({
  type: AUTH_LOGIN,
});

export const authLogout = ads => ({
  type: ADS_LOADED,
  payload: ads,
});
