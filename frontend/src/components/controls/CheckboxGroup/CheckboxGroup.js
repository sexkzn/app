import React from 'react';
import cn from 'classnames';

import useCheckboxGroup from './useCheckboxGroup';
import CheckboxList from './CheckboxList';

function CheckboxGroup({ className, items, left, right, value, ...rest }) {
  const { onChange, formatItemsToIds, checked } = useCheckboxGroup(rest);

  return (
    <div className={cn('checkbox-group', className)}>
      {left && <CheckboxList key="left" checked={checked} list={left} onChange={onChange} formatItemsToIds={formatItemsToIds} />}
      {right && <CheckboxList key="right" checked={checked} list={right} onChange={onChange} formatItemsToIds={formatItemsToIds} />}
    </div>
  );
}

export default CheckboxGroup;
