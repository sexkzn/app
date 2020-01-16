import React from 'react';
import cn from 'classnames';

function InputText({ className, ...rest }) {
  return (
    <input className={cn('input-text', className)} type="text" {...rest} />
  );
}

export default InputText;
