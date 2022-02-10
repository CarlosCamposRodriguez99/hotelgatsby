import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(mi)
`;

const ContenidoContacto = () => {

  const resultado = useStaticQuery(graphql`
  query {
      allDatoCmsPagina(filter: { slug: { eq: "contacto"} }) {
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
      <Contenido>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="/contacto"/>
      </Contenido>
  </>
  
);
}

export default ContenidoContacto;