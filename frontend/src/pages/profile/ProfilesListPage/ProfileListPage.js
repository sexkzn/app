import React from 'react';

import Title from '../../../components/snippets/Title';
import Table from '../../../components/widgets/Table/Table';

import useProfilesListPage from '../../../hooks/useProfilesListPage';
import profilesListColumns from './profilesListColumns';

function ProfileListPage(props) {
  const { profilesList, onEdit, onAddPictures, onDelete } = useProfilesListPage();

  return (
    <div className="profiles-list-page">
      <Title className="profiles-list-page__title">Анкеты</Title>
      <Table
        className="profiles-list-page__table"
        columns={profilesListColumns(onEdit, onAddPictures, onDelete)}
        data={profilesList}
      />
    </div>
  );
}

export default ProfileListPage;
