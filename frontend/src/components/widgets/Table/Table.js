import React from 'react';
import RcTable from 'rc-table';

function Table({ className, ...rest }) {
  return <RcTable className={className} prefixCls="table" {...rest} />;
}

export default Table;
