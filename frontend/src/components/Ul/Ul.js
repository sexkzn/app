import React from 'react';
import cn from 'classnames';

import Title from '../Title';

function Ul({ className, title, children }) {
  return (
    <div className="ul__container">
      <Title className="ul__title">{title}</Title>
      <ul className={cn('ul', className)}>{children}</ul>
    </div>
  );
}

export default Ul;
