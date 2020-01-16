import createActionHelper from './createActionHelper';

import { LOGIN } from '../constants/authorize';

export const login = (username, password, onSuccess, onError) =>
  createActionHelper(LOGIN)({ username, password, onSuccess, onError });
