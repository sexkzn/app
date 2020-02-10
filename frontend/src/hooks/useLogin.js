import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isFunction from 'lodash/isFunction';

import { login as loginAction } from '../actions/authorize';
import {fetchData} from "../actions/fetch";
import Api from "../api";

const useLogin = () => {
  const dispatch = useDispatch();
  const [showCode, setShowCode] = useState(false);
  const [email, setEmail] = useState(null);

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
      onSuccess: () => {
        if (isFunction(onSuccess)) onSuccess();

        setEmail(body.email);
        setShowCode(true);
      }
    }))
  };

  const sendCode = (code, onSuccess) => {
    dispatch(fetchData({
      url: Api.verify,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      },
      onSuccess: () => {
        if (isFunction(onSuccess)) onSuccess();


      }
    }))
  };

  return {
    login,
    register,
    showCode,
    email,
    sendCode
  };
};

export default useLogin;
