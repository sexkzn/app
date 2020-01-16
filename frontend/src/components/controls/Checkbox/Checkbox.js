import React from 'react';
import RcCheckbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

function Checkbox(props) {
  return (
    <div className="checkbox">
      <RcCheckbox className="checkbox__control checkbox-control" {...props} />
    </div>
  );
}

export default Checkbox;
