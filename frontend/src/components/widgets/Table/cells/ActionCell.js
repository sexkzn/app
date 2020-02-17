import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../../snippets/Button';

function ActionCell({ className, children, color, onClick, value }) {
  return (
    <Button
      className={cn('table__action-cell', className)}
      color={color}
      onClick={() => onClick(value)}
    >
      {children}
    </Button>
  );
}

ActionCell.propTypes = {
  onClick: PropTypes.func,
};

ActionCell.defaultProps = {
  onClick: () => {},
};

export default ActionCell;
