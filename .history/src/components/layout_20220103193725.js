import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = (props) => {
  return ( 
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        
      </Helmet>

      <Header />
      {props.children}
    
    </>
  );
}

export default Layout;