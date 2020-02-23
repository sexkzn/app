import { SET_USER } from '../constants/user';

const initialState = {
  login: null,
  role: null,
  consumption: {},
  stats: {},
  views: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
