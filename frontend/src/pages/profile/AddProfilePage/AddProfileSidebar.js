import React from 'react';
import StatsBlock from '../../../components/snippets/StatsBlock';
import { Path } from '../../../routes';
import Sidebar from '../../../components/layout/Sidebar';

function AddProfileSidebar(props) {
  return (
    <div className="add-profile-page__sidebar">
      <StatsBlock
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
