import React from 'react';

import useConfig from '../../../hooks/useConfig';

function ConfigProvider({ children }) {
  const { loading } = useConfig();

  return children;
}

export default ConfigProvider;
