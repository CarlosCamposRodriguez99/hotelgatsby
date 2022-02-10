import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = (props) => {
  return ( 
    <>
      <Helmet>
        <title=
      </Helmet>

      <Header />
      {props.children}
    
    </>
  );
}

export default Layout;