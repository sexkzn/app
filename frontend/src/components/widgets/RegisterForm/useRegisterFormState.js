import { useState, useCallback } from 'react';

const useRegisterFormState = ({ handleSubmit, handleSubmitCode }) => {
  const [email, setEmail] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const onSubmit = useCallback((values) => {
    setEmail(values.email);
    handleSubmit(values, () => setShowCode(true));
  }, []);

  const onSubmitCode = useCallback(() => {
    handleSubmitCode();
  }, []);

  return {
    email,
    showCode,
    onSubmit,
    onSubmitCode,
  };
};

export default useRegisterFormState;
