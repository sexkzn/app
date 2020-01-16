import React from 'react';
import ProfileStatsBlock from '../../components/ProfileStatsBlock';
import { Path } from '../../routes';
import Sidebar from '../../components/Sidebar';

function AddProfileSidebar(props) {
  return (
    <div className="add-profile-page__sidebar">
      <ProfileStatsBlock
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
        className="profile-page__sidebar"
        items={[
          {
            title: 'Сообщения',
            links: [
              { label: 'Сообщения 0 из 0', link: '/messages' },
              { label: 'Новое сообщение', link: '/messages/new' },
            ],
          },
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
  );
}

export default AddProfileSidebar;
