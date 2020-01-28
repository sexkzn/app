import React from 'react';
import cn from 'classnames';

import useCheckboxGroup from './useCheckboxGroup';
import CheckboxList from './CheckboxList';

function CheckboxGroup({ className, items, left, right, ...rest }) {
  const { value, onChange } = useCheckboxGroup(rest);

  return (
    <div className={cn('checkbox-group', className)}>
      {left && <CheckboxList key="left" list={left} onChange={onChange} />}
      {right && <CheckboxList key="right" list={right} onChange={onChange} />}
    </div>
  );
}

export default CheckboxGroup;
