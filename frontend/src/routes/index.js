import React from 'react';
import BodiesPage from "../Pages/BodiesPage";
import BodyPage from "../Pages/BodyPage";

const routes = [
  {
    path: '/',
    exact: true,
    render: props => <BodiesPage {...props} />
  },
  {
    path: '/girl/:id',
    render: props => <BodyPage {...props} />
  }
];

export default routes;
