import {
  SET_USER,
  SET_USER_LOADING,
  SET_USER_AUTHORIZED,
} from '../constants/user';

const initialState = {
  login: null,
  role: null,
  consumption: {},
  stats: {},
  views: {},
  loading: true,
  isAuthorized: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload, { isAuthorized: true });
    case SET_USER_LOADING:
      return Object.assign({}, state, { loading: action.payload.loading });
    case SET_USER_AUTHORIZED:
      return Object.assign({}, state, {
        isAuthorized: action.payload.isAuthorized,
      });
    default:
      return state;
  }
};
