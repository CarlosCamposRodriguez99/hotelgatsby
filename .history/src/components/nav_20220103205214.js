import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
      padding-bottom: 0;
    } 
`;

const NavLink =

const Navegacion = () => {
  return (  
    <Nav>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/nosotros'}>Nosotros</Link>
      <Link to={'/contacto'}>Contacto</Link>
    </Nav>
  );
}

export default Navegacion;