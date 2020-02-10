import React from 'react';

import ReactCodeInput from 'react-verification-code-input';

function VerifierInput(props) {
  return <ReactCodeInput className='verifier-input' {...props} />;
}

export default VerifierInput;
