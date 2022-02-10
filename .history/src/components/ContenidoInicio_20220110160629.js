import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
  allDatoCmsPagina(filter: { slug: { eq: "inicio"} }) {
    nodes {
      titulo
      contenido
      imagen {
        gatsbyImageData
      }
    }
  }
}
`);

//console.log(informacion.allDatoCmsPagina.nodes);

const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

  return ( 
    <>
        <h2
            css={css`
               t
            `}
        
        >{titulo}</h2>
        
        <div>
          <p>{contenido}</p>
          <GatsbyImage image={imagen.gatsbyImageData} alt="inicio"/>
        </div>
      
    </>

  );
}

export default ContenidoInicio;