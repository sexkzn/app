import createActionHelper from './createActionHelper';

import { LOGIN, LOGOUT } from '../constants/authorize';

export const login = (username, password, onSuccess, onError) =>
  createActionHelper(LOGIN)({ username, password, onSuccess, onError });

export const logout = () => createActionHelper(LOGOUT)();
