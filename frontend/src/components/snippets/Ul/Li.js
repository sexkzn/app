import React from 'react';
import cn from 'classnames';

function Li({ className, children }) {
  return <li className={cn('li', className)}>{children}</li>;
}

export default Li;
