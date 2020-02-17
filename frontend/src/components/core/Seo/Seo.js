import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ title, keywords, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;
