import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import map from 'lodash/map';

import ConfigProvider from './components/core/ConfigProvider';
import Layout from './components/layout/Layout';

import './scss/main.scss';
import 'rc-slider/assets/index.css';

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
            </Layout>
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
