import { useDispatch, useSelector } from 'react-redux';

import { login as loginAction } from '../actions/authorize';
import {fetchData} from "../actions/fetch";
import Api from "../api";

const useLogin = () => {
  const dispatch = useDispatch();

  const login = (login, password, onSuccess, onError) => {
    dispatch(loginAction(login, password, onSuccess, onError));
  };

  const register = (body, onSuccess) => {
    dispatch(fetchData({
      url: Api.register,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      },
      onSuccess
    }))
  };

  return {
    login,
    register
  };
};

export default useLogin;
