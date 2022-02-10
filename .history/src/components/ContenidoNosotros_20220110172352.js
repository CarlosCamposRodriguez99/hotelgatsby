import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
  query {
  allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
    nodes {
      titulo
      contenido
      imagen (max-width) {
        gatsbyImageData
      }
    }
  }
}
`)
return ( 
  
);
}

export default ContenidoNosotros;