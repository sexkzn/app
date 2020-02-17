import React from 'react';
import map from 'lodash/map';
import isEmpty from "lodash/isEmpty";
import get from 'lodash/get';

import Field from '../../Field/Field';

function CheckboxList({ key, list, checked, onChange, formatItemsToIds }) {
  return (
    <div className="checkbox-group__list">
      {map(list, ({ id, label, value, subItems, single }, index) => (
        <div className="checkbox-group__item" key={`${key}${index}`}>
          {
            single ? <Field
              src="Checkbox"
              label={label}
              value={value}
              labelPosition="right"
              onChange={onChange(!isEmpty(subItems) ? formatItemsToIds(subItems) : id)}
            /> : <div className='checkbox-group__item-label'>{label}</div>
          }
          <div className="checkbox-group__sub-items">
            {map(subItems, ({ id, label, value }, index) => (
              <Field
                key={`right-control${index}`}
                src="Checkbox"
                label={label}
                value={value}
                labelPosition="right"
                onChange={onChange(id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
