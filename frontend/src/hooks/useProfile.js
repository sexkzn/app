import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userSelector } from '../selectors/user';
import { fetchData } from '../actions/fetch';
import Api from '../api';

const FETCH_ID = 'profilePage';

const useProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(
      fetchData({
        id: FETCH_ID,
        url: Api.profile,
      })
    );
  }, []);

  return {
    user,
  };
};

export default useProfile;
