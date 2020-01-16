import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetch from './fetch';
import user from './user';

export default combineReducers({
  form: formReducer,
  fetch,
  user,
});
