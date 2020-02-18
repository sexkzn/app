import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../actions/user';
import { userSelector } from '../selectors/user';

const useConfig = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const getUserFromServer = () => dispatch(getUser());

  useEffect(() => {
    getUserFromServer();
  }, []);

  return user;
};

export default useConfig;
