import { AUTH_LOGIN, ADS_LOADED, AUTH_LOGOUT } from './types';

export const authLogin = () => ({
  type: AUTH_LOGIN,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const adsLoaded = ads => ({
  type: ADS_LOADED,
  payload: ads,
});
