import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Title from '../../../components/snippets/Title';
import AddProfileForm from '../AddProfilePage/AddProfileForm';

import useEditProfilePage from '../../../hooks/useEditProfilePage';

function EditProfilePage(props) {
  const { profile, updateProfile } = useEditProfilePage();

  return (
    <div className="edit-profile-page">
      <Title>Редактировать анкету</Title>
      {!isEmpty(profile) && (
        <AddProfileForm
          onSubmit={updateProfile}
          label="Сохранить"
          initialValues={profile}
        />
      )}
    </div>
  );
}

export default EditProfilePage;
