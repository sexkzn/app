import React from 'react';
import { Route, Switch } from 'react-router-dom';
import map from 'lodash/map';

import { profileRoutes } from '../../routes';
import ProfileLayout from '../../components/layout/ProfileLayout';

function ProfileScope() {
  return (
    <ProfileLayout className="profile-page">
      <Switch>
        {map(profileRoutes, (props, index) => (
          <Route {...props} key={`profile-${index}`} />
        ))}
      </Switch>
    </ProfileLayout>
  );
}

export default ProfileScope;
