import React from 'react';
import map from 'lodash/map';
import Field from '../../Field/Field';

function CheckboxList({ key, list, onChange }) {
  return (
    <div className="checkbox-group__list">
      {map(list, ({ id, label, value, subItems }, index) => (
        <div className="checkbox-group__item" key={`${key}${index}`}>
          <Field
            src="Checkbox"
            label={label}
            value={value}
            labelPosition="right"
            onChange={(event) => id && onChange(id, event)}
          />
          <div className="checkbox-group__sub-items">
            {map(subItems, ({ id, label, value }, index) => (
              <Field
                key={`right-control${index}`}
                src="Checkbox"
                label={label}
                value={value}
                labelPosition="right"
                onChange={(event) => onChange(id, event)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
