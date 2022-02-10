import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media
`;

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