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

const Header = () => {
  return ( 
    <header
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

        <EnlaceHome>
        <h1
        >Hotel Gatsby</h1>

        </EnlaceHome>
        
        <Navegacion />
        
      </div>
    </header>

  );
}

export default Header;