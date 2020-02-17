import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Title({ className, level, children }) {
  const Tag = (props) => React.createElement(`h${level}`, props);
  return <Tag className={cn('title', className)}>{children}</Tag>;
}

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
};

Title.defaultProps = {
  level: 1,
};

export default Title;
