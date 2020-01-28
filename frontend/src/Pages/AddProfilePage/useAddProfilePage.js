import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../actions/fetch';
import Api from '../../api';

const CREATE_PROFILE = 'createProfile';

const useAddProfilePage = () => {
  const dispatch = useDispatch();

  const onSubmit = (vls, errs) => {
    dispatch(
      fetchData({
        id: CREATE_PROFILE,
        url: Api.profileCreate,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(vls),
        },
      })
    );
  };

  return {
    onSubmit,
  };
};

export default useAddProfilePage;
