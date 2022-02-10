import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const 

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
  query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
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

const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];

return ( 
  <>
      <h2
        css={css`
            margin-top: 4rem;
            text-align: center;
            font-size: 4rem;

        `}
      >{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="/nosotros"/>
      </div>
  </>
  
);
}

export default ContenidoNosotros;