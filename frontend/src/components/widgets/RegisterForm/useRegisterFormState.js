import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const useRegisterFormState = ({ handleSubmit, handleSubmitCode }) => {
  const [email, setEmail] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const onSubmit = useCallback((values) => {
    setEmail(values.email);
    handleSubmit(
      values,
      () => setShowCode(true),
      (err) => toast.error(err.body.error.text, { autoClose: false })
    );
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
