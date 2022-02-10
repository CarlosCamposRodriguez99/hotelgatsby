import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: )

`;

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
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}
        
        >{titulo}</h2>
        
        <TextoInicio>
          <p>{contenido}</p>
          <GatsbyImage image={imagen.gatsbyImageData} alt="inicio"/>
        </TextoInicio>
      
    </>

  );
}

export default ContenidoInicio;