import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">Copyright © dosugkzn.xyz 2019</div>
        <div className="footer__center">
          <div>
            Администрация не несет ответственности за размещенную пользователями
            информацию
          </div>
          <div className="footer__email">
            Email <a href="mailto:info@dosugkzn.xyz">info@dosugkzn.xyz</a>
          </div>
        </div>
        <div className="footer__terms-of-use">
          <a href="">Соглашение</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
