import React from 'react';

import useGettingCaptcha from './useGettingCaptcha';
import Button from '../../snippets/Button';

function Captcha(props) {
  const { loading, captcha } = useGettingCaptcha();

  return (
    <div className="captcha">
      <div className="captcha__img">
        <img src="/index.jpg" alt="" />
      </div>
      <div className="captcha__actions">
        <Button>
          <i className="fa fa-refresh" />
        </Button>
      </div>
    </div>
  );
}

export default Captcha;
