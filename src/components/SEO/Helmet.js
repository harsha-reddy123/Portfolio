import React from 'react';

const SEOHelmet = ({ title = 'Harsha Portfolio' }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default SEOHelmet;
