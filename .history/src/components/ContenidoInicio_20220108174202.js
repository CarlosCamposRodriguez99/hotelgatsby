import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
  allDatoCmsPagina(filter: { slug: { eq: "inicio"} }) {
    nodes {
      titulo
      contenido
      imagen {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}
`);

///console.log(informacion.allDatoCmsPagina.nodes[0]);

const

  return ( 
    <>
        <h2>Titulo de Página</h2>
    </>

  );
}

export default ContenidoInicio;