import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
      allDatoCmsHabitacion(filter: {slug: {eq: $slug} }) {
            nodes {
              titulo
              contenido
              imagen {
                gatsbyImageData
              }
            }
          }
  }
`;

const HabitacionTemplate = ({data: {allDatoCmsHabitacion: {nodes}}}) => {

  const { contenido, titulo, imagen } = nodes[0];
  return ( 
    <Layout>
      <main
          css={css`
              margin: 0 auto;
              max-width: 1200px;
              width: 95%;
          `}
      >
          <h1
            css={css`
                text-align: center;
                margin-top: 4rem;
            `}
          >{titulo}</h1>
          <p>{contenido}</p>
          <GatsbyImage image={imagen.gatsbyImageData} alt="/contacto" />
      </main>


    </Layout>

  );
}

export default HabitacionTemplate;