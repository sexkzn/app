import { useState, useEffect } from 'react';
import isObject from 'lodash/isObject';
import set from 'lodash/set';
import map from 'lodash/map';

const useCheckboxGroup = ({ onChange }) => {
  const [state, setState] = useState({});

  const formatItemsToIds = (items) => {
    const ids = {};

    map(items, ({ id }) => set(ids, id, true));

    return ids;
  };

  const handleChange = (id) => {
    return (event) => {
      const newValue = Object.assign({}, state, isObject(id) ? id : { [id]: event.target.checked });

      setState(newValue);
      onChange(newValue);
    };
  };

  return {
    value: state,
    onChange: handleChange,
    formatItemsToIds
  };
};

export default useCheckboxGroup;
