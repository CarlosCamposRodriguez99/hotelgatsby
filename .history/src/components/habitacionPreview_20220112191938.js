import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)``

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