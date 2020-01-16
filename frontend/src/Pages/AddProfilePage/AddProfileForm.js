import React from 'react';

import { reduxForm } from 'redux-form';
import map from 'lodash/map';

import ReduxField from '../../components/Field';
import formSettings from './formSettings';

function AddProfileForm(props) {
  return (
    <div className="add-profile-page__form">
      <form>
        {map(formSettings, (field) => (
          <ReduxField className="add-profile-page__form-field" {...field} />
        ))}
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'addForm',
})(AddProfileForm);
