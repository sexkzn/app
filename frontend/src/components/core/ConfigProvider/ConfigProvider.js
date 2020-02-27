import React from 'react';
import isNull from 'lodash/isNull';

import Loader from '../../snippets/Loader';
import useConfig from '../../../hooks/useConfig';

function ConfigProvider({ children }) {
  const { isAuthorized } = useConfig();

  return isNull(isAuthorized) ? <Loader /> : children;
}

export default ConfigProvider;
