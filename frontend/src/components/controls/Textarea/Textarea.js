import React from 'react';
import cn from 'classnames';

function Textarea({ className, cols, rows, value, ...rest }) {
  return (
    <textarea
      className={cn('textarea', className)}
      cols={cols}
      rows={rows}
      {...rest}
    >
      {value}
    </textarea>
  );
}

export default Textarea;
