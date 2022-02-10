import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = () => {

  const year = new Date().

  return ( 
    <>
    <footer
      css={css`
          background-color: #222;
          padding: 1rem;
      `}
    >
      <div
        css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
        `}
      >

        <Navegacion />

        <EnlaceHome
            to="/"
        ><h1>Hotel Gatsby</h1></EnlaceHome>

      </div>
    </footer>
    <p>
        Hotel Gatsby. Todos los derechos reservados &copy;
    </p>
    </>

  );
}

export default Footer;