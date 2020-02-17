import React from 'react';
import cn from 'classnames';

import useGettingProfileInfo from './useGettingProfileInfo';
import ProfileHeader from './ProfileHeader';
import StatsBlock from '../../snippets/StatsBlock';
import Sidebar from '../Sidebar';
import { Path } from '../../../routes';

function ProfileLayout({ className, children }) {
  const { title } = useGettingProfileInfo();

  return (
    <div className={cn('profile-layout', className)}>
      <ProfileHeader className="profile-layout__header" title={title} />
      <div className="profile-layout__sidebar">
        <StatsBlock
          className="profile-layout__stats"
          title="Девушки"
          items={[
            {
              label: 'Добавить анкету',
              link: Path.ADD,
            },
            {
              label: 'Мои анкеты',
              link: Path.PROFILES,
            },
          ]}
        />
        <Sidebar
          className="profile-layout__sidebar-info"
          items={[
            {
              title: 'Финансовая статистика',
              links: [
                {
                  label: 'Списания',
                },
                {
                  label: 'Зачисления',
                },
              ],
            },
            {
              title: 'Администрирование',
              links: [
                {
                  label: 'Регистрационные данные',
                },
              ],
            },
          ]}
        />
      </div>
      <div className="profile-layout__main">{children}</div>
    </div>
  );
}

export default ProfileLayout;
