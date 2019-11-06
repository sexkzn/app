import React from 'react';
import Helmet from 'react-helmet';

function Seo({
  title,
  description
             }) {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta lang='ru' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='проститутки, индивидуалки, шлюхи, феи, интим, секс, казань, казани' />
    </Helmet>
  );
}

export default Seo;
