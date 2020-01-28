import { useState } from 'react';

const useInputRates = ({ onChange }) => {
  const [state, setState] = useState({});

  const handleChange = (id, value) => {
    const newValue = Object.assign({}, state, {
      [id]: value,
    });

    setState(newValue);
    onChange(newValue);
  };

  return {
    onChange: handleChange,
  };
};

export default useInputRates;
