import { useDispatch, useSelector } from 'react-redux';

import { login as loginAction } from '../actions/authorize';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = (login, password, onSuccess, onError) => {
    dispatch(loginAction(login, password, onSuccess, onError));
  };

  return {
    login,
  };
};

export default useLogin;
