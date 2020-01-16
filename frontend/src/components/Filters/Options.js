import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import ServicesFilter from './ServicesFilter';
import LocationFilter from './LocationFilter';
import AppearanceFilter from './AppearanceFilter';
import map from 'lodash/map';
import cn from 'classnames';

const FilterId = {
  SERVICES: 'services',
  LOCATION: 'location',
  APPEARANCE: 'appearance',
};

const options = [
  {
    id: FilterId.SERVICES,
    title: 'Услуги',
  },
  {
    id: FilterId.LOCATION,
    title: 'Местоположение',
  },
  {
    id: FilterId.APPEARANCE,
    title: 'Внешность',
  },
];

const Filter = {
  [FilterId.SERVICES]: ServicesFilter,
  [FilterId.LOCATION]: LocationFilter,
  [FilterId.APPEARANCE]: AppearanceFilter,
};

const Option = ({ id, title, activeId, onClick }) => (
  <div className="header-filters__option" onClick={() => onClick(id)}>
    <div>{title}</div>
    <img
      className={cn('header-filters__option-arrow', {
        'header-filters__option-arrow--active': id === activeId,
      })}
      width={16}
      height={16}
      src="arrow.png"
      alt={title}
    />
  </div>
);

function Options(props) {
  const ref = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const onChangeOptionVisibility = (id) =>
    setActiveId(id === activeId ? null : id);

  const FilterComponent = Filter[activeId];

  useClickAway(ref, () => setActiveId(null));

  return (
    <div ref={ref} className="header-filters__options-container">
      <div className="header-filters__options">
        {map(options, (props) => (
          <Option
            {...props}
            activeId={activeId}
            onClick={onChangeOptionVisibility}
          />
        ))}
      </div>
      {activeId && <FilterComponent />}
    </div>
  );
}

export default Options;
