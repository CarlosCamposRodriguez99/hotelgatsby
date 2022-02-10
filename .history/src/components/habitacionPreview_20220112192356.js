import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;

`;

const HabitacionPreview = ({habitacion}) => {
  
  const {contenido, imagen, titulo , slug} = habitacion;
  
  return ( 
    <div>

      <GatsbyImage image={imagen.gatsbyImageData} />

      <div>
          <h3>{titulo}</h3>
          <p>{contenido}</p>
      </div>
    </div>
    
  );
}

export default HabitacionPreview;