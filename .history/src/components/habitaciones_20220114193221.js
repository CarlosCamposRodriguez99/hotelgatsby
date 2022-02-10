import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

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
      <main>
        <h1>{</h1>
      </main>


    </Layout>

  );
}

export default HabitacionTemplate;