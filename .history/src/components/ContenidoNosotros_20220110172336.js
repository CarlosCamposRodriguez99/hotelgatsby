import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
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
`)
return ( 
  
);
}

export default ContenidoNosotros;