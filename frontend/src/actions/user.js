import createActionHelper from './createActionHelper';

import { GET_USER, SET_USER } from '../constants/user';

export const setUser = (user) => createActionHelper(SET_USER)(user);
export const getUser = () => createActionHelper(GET_USER)();
