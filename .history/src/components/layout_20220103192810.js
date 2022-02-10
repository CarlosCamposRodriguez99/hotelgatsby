import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = (props) => {
  return ( 
    <>
      
      <Header />
      {props.children}
    
    </>
  );
}

export default Layout;