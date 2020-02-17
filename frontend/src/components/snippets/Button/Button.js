import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ButtonType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
};

function Button({ className, onClick, color, children, type }) {
  return (
    <button
      className={cn('button', className, {
        'button--primary': color === ButtonType.PRIMARY,
        'button--secondary': color === ButtonType.SECONDARY,
        'button--link': color === ButtonType.LINK,
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf([
    ButtonType.PRIMARY,
    ButtonType.SECONDARY,
    ButtonType.LINK,
  ]),
  type: PropTypes.string,
};

Button.defaultProps = {
  color: ButtonType.PRIMARY,
  type: 'button',
};

export default Button;
