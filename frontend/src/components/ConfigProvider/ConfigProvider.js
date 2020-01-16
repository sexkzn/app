import React from 'react';

import useConfig from '../../hooks/useConfig';

function ConfigProvider({ children }) {
  useConfig();

  return children;
}

export default ConfigProvider;
