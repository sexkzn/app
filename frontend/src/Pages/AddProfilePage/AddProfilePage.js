import React from 'react';

import ProfileHeader from '../../components/ProfileHeader';
import AddProfileForm from './AddProfileForm';
import AddProfileSidebar from './AddProfileSidebar';

function AddProfilePage(props) {
  return (
    <div className="add-profile-page">
      <ProfileHeader
        className="add-profile-page__title"
        title="Добавление анкеты"
      />
      <div className="add-profile-page__main">
        <AddProfileSidebar />
        <AddProfileForm />
      </div>
    </div>
  );
}

export default AddProfilePage;
