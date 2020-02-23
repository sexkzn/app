import React from 'react';
import RcTable from 'rc-table';

import EmptyText from './EmptyText';

function Table({ className, ...rest }) {
  return (
    <RcTable
      className={className}
      prefixCls="table"
      {...rest}
      emptyText={EmptyText}
    />
  );
}

export default Table;
