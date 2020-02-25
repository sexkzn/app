import React from 'react';

import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import configureStore from './store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes, { privateRoutes } from './routes';

import map from 'lodash/map';

import ConfigProvider from './components/core/ConfigProvider';
import Layout from './components/layout/Layout';

import './scss/main.scss';
import 'rc-slider/assets/index.css';
import PrivateRoute from './components/core/PrivateRoute';

toast.configure();

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConfigProvider>
        <Router>
          <Switch>
            <Layout>
              {map(routes, (props, index) => (
                <Route key={index} {...props} />
              ))}
              {map(privateRoutes, (props, index) => (
                <PrivateRoute {...props} key={`private-page-${index}`} />
              ))}
            </Layout>
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
