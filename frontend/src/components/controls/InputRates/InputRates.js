import React from 'react';
import map from 'lodash/map';

import useInputRates from './useInputRates';
import InputNumber from '../InputNumber';

function InputRates({ items, ...rest }) {
  const { onChange } = useInputRates(rest);

  return (
    <div className="input-rates">
      {map(items, ({ label, subItems }, index) => (
        <div className="input-rates__item" key={`rate-${index}`}>
          {map(subItems, ({ id, placeholder }, index) => (
            <div className="input-rates__control" key={`rate-control-${index}`}>
              <InputNumber
                onChange={(value) => onChange(id, value)}
                placeholder={placeholder}
              />
            </div>
          ))}
          <div className="input-rates__label">({label})</div>
        </div>
      ))}
    </div>
  );
}

export default InputRates;
