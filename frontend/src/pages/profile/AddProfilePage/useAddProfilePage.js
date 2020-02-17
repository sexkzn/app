import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';

import { fetchData } from '../../../actions/fetch';
import Api from '../../../api';
import { Path } from '../../../routes';

const CREATE_PROFILE = 'createProfile';

const useAddProfilePage = () => {
  const history = useHistory();
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
        onSuccess: ({ id }) =>
          history.push(pathToRegexp.compile(Path.ADD_IMAGES)({ id })),
      })
    );
  };

  return {
    onSubmit,
  };
};

export default useAddProfilePage;
