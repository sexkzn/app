import React from 'react';

import ProfilePage from '../pages/profile/ProfilePage';
import MainPage from '../pages/main/MainPage';
import GirlPage from '../pages/main/GirlPage';
import ProfileListPage from '../pages/profile/ProfilesListPage';
import AddProfilePage from '../pages/profile/AddProfilePage';
import EditProfilePage from '../pages/profile/EditProfilePage';
import AddPicturesPage from '../pages/profile/AddPicturesPage';

export const Path = {
  MAIN: '/',
  GIRL: '/girl/:id',
  PROFILE: '/profile',
  ADD: '/profile/add',
  EDIT: 'profile/edit/:id',
  PROFILES: '/profile/list',
  ADD_IMAGES: '/profile/:id/images',
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
];

const privateRoutes = [
  {
    path: '/profile',
    exact: true,
    render: (props) => <ProfilePage {...props} />,
  },
  {
    path: '/profile/list',
    render: (props) => <ProfileListPage {...props} />,
  },
  {
    path: Path.ADD,
    render: (props) => <AddProfilePage {...props} />,
  },
  {
    path: '/edit/:id',
    render: (props) => <EditProfilePage {...props} />,
  },
  {
    path: Path.ADD_IMAGES,
    render: (props) => <AddPicturesPage {...props} />,
  },
];

export { privateRoutes };
export default routes;
