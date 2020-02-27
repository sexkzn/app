import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userSelector } from '../../../selectors/user';

function PrivateRoute(props) {
  const { isAuthorized } = useSelector(userSelector);

  return <Route {...props} />;
}

export default PrivateRoute;
