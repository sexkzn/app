import createActionHelper from './createActionHelper';

import {
  GET_USER,
  SET_USER,
  SET_USER_LOADING,
  SET_USER_AUTHORIZED,
} from '../constants/user';

export const setUser = (user) => createActionHelper(SET_USER)(user);
export const getUser = () => createActionHelper(GET_USER)();
export const setUserLoading = (loading) =>
  createActionHelper(SET_USER_LOADING)({ loading });
export const setUserAuthorized = (isAuthorized) =>
  createActionHelper(SET_USER_AUTHORIZED)({ isAuthorized });
