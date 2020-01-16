import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control';

import cn from 'classnames';

const LabelPosition = {
  LEFT: 'left',
  RIGHT: 'right',
};

function Field(props) {
  const {
    id,
    label,
    help,
    className,
    meta = {},
    errorPosition,
    input,
    labelPosition,
    ...rest
  } = props;
  const { error, touched } = meta;
  const hasError = error && touched;

  return (
    <div
      className={cn('field', className, {
        'field--invalid': hasError,
        'field--left': labelPosition === LabelPosition.LEFT,
        'field--right': labelPosition === LabelPosition.RIGHT,
      })}
    >
      {label && (
        <label className="field__label" htmlFor={id || rest.name}>
          {label}
        </label>
      )}
      <div className="field__control-container">
        <Control {...rest} {...input} />
        {help && <div className="field__control-help">{help}</div>}
      </div>
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  labelPosition: PropTypes.string,
  help: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
  errorPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  input: PropTypes.object,
};

export default Field;
