import React from 'react';
import { reduxForm } from 'redux-form';
import map from 'lodash/map';
import Options from './Options';
import Field from '../Field';
import Button from '../snippets/Button';
import controlsConfig from './controlsConfig';

function HeaderFilters() {
  return (
    <div className="header-filters__container">
      <div className="header__filters header-filters">
        <Options />
        <div className="header-filters__content">
          {map(controlsConfig, (row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="header-filters__row">
              {map(row, (col, colIndex) => (
                <div key={`col-${colIndex}`} className="header-filters__col">
                  <Field src="Slider" {...col} />
                </div>
              ))}
            </div>
          ))}
          <div className="header-filters__buttons-container">
            <div className="header-filters__buttons-col">
              <Button color="primary">Поиск</Button>
            </div>
            <div className="header-filters__buttons-col">
              <Button color="secondary">Сброс</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reduxForm({
  form: 'filter',
})(HeaderFilters);
