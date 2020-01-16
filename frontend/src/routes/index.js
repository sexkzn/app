import React from 'react';

import MainPage from '../Pages/MainPage';
import GirlPage from '../Pages/GirlPage';
import ProfilePage from '../Pages/ProfilePage';
import ProfileListPage from '../Pages/ProfilesListPage';
import AddProfilePage from '../Pages/AddProfilePage';
import EditProfilePage from '../Pages/EditProfilePage';

export const Path = {
  MAIN: '/',
  GIRL: '/girl/:id',
  PROFILE: '/profile',
  ADD: '/add',
  EDIT: '/edit/:id',
  PROFILES: '/profile/list',
};

const routes = [
  {
    path: Path.MAIN,
    exact: true,
    render: (props) => <MainPage {...props} />,
  },
  {
    path: Path.GIRL,
    render: (props) => <GirlPage {...props} />,
  },
  {
    path: Path.PROFILE,
    exact: true,
    render: (props) => <ProfilePage {...props} />,
  },
  {
    path: Path.PROFILES,
    render: (props) => <ProfileListPage {...props} />,
  },
  {
    path: Path.ADD,
    render: (props) => <AddProfilePage {...props} />,
  },
  {
    path: Path.EDIT,
    render: (props) => <EditProfilePage {...props} />,
    exact: true,
  },
];

export default routes;
