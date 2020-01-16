import React from 'react';

import Title from '../../components/Title';
import AddProfileForm from '../AddProfilePage/AddProfileForm';

import useEditProfilePage from '../../hooks/useEditProfilePage';

function EditProfilePage(props) {
  const { profile } = useEditProfilePage();

  return (
    <div className="edit-profile-page">
      <Title>Редактировать анкету</Title>
      <AddProfileForm initialValues={profile} />
    </div>
  );
}

export default EditProfilePage;
