import { SET_USER, SET_USER_LOADING } from '../constants/user';

const initialState = {
  login: null,
  role: null,
  consumption: {},
  stats: {},
  views: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload);
    case SET_USER_LOADING:
      return Object.assign({}, state, { loading: action.payload.loading });
    default:
      return state;
  }
};
