import React from 'react';

import Helmet from 'react-helmet';

const Layout = (props) => {
  return ( 
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />
      {props.children}
    
    </>
  );
}

export default Layout;