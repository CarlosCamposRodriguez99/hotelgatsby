import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Navegacion = () => {
  return (  
    <nav>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/nosotros'}>Nosotros</Link>
      <Link to={'/contacto'}>Contacto</Link>
    </nav>
  );
}

export default Navegacion;