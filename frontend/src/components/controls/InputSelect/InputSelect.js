import React from 'react';
import RcSelect, { Option } from 'rc-select';
import map from 'lodash/map';

function InputSelect({ options, value, ...props }) {
  return (
    <RcSelect className="input-select" {...props}>
      {map(options, ({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </RcSelect>
  );
}

export default InputSelect;
