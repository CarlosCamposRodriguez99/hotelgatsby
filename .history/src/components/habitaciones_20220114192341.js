import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
      allDatoCmsHabitacion(filter: {slug: {eq: $slug} }) {
            nodes {
              titulo
              contenido
              imagen {
                gastbyImageData
              }
            }
          }
      }
  }

`;

const HabitacionTemplate = ({data}) => {
  console.log(data);
  return ( 
    <Layout

  );
}

export default HabitacionTemplate;