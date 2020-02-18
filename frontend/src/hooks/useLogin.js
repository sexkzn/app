import { useDispatch } from 'react-redux';
import isFunction from 'lodash/isFunction';

import { login as loginAction } from '../actions/authorize';
import { fetchData } from '../actions/fetch';
import { getUser } from '../actions/user';
import Api from '../api';

const useLogin = () => {
  const dispatch = useDispatch();

  const handleGetUser = () => dispatch(getUser());
  const login = ({ login, password }) => dispatch(loginAction(login, password));
  const register = (body, onSuccess, onError) =>
    dispatch(
      fetchData({
        url: Api.register,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
        onSuccess: () => {
          if (isFunction(onSuccess)) onSuccess();
        },
        onError: (err) => {
          if (isFunction(onError)) onError(err);
        },
      })
    );

  const handleSubmitCode = (code, onSuccess) =>
    dispatch(
      fetchData({
        url: Api.verify,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        },
        onSuccess: () => {
          if (isFunction(onSuccess)) onSuccess();
          handleGetUser();
        },
      })
    );

  return {
    login,
    register,
    handleSubmitCode,
  };
};

export default useLogin;
