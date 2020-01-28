import { useState, useEffect } from 'react';

const useCheckboxGroup = ({ onChange }) => {
  const [state, setState] = useState({});

  const handleChange = (id, event) => {
    const newValue = Object.assign({}, state, { [id]: event.target.checked });

    setState(newValue);
    onChange(newValue);
  };

  return {
    value: state,
    onChange: handleChange,
  };
};

export default useCheckboxGroup;
