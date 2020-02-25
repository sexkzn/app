import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../selectors/user';

function PrivateRoute(props) {
  const user = useSelector(userSelector);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.username) {
      // history.goBack();
    }
  }, [user]);

  return <Route {...props} />;
}

export default PrivateRoute;
