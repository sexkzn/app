import React from 'react';

import cn from 'classnames';

import Title from '../../snippets/Title';
import Button from '../../snippets/Button';
import useBalance from '../../../hooks/useBalance';

function ProfileHeader({ className, title }) {
  const { balance } = useBalance();

  return (
    <div className={cn('profile-header', className)}>
      <Title className="profile-header__title">{title}</Title>
      {false && (
        <div className="profile-header__balance">
          <div className="profile-header__balance-value">
            {balance && `Баланс: ${balance} руб.`}
          </div>
          <div className="profile-header__balance-up">
            <Button color="primary">Пополнить баланс</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
