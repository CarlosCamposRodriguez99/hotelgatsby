import React from 'react';
import {css} from '@emotion/react';

const Header = () => {
  return ( 
    <header
      css={css`
          background-color: #333;
          
      `}
    >
      <div>
        <h1>Hotel Gatsby</h1>
      </div>
    </header>

  );
}

export default Header;