import React from 'react';
import cn from 'classnames';

function Loader({ classNames }) {
  return (
    <div className={cn('loader', classNames)}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
