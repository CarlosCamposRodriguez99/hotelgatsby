import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
  allDatoCmsPagina(filter: { slug: { eq: "Inicio"} }) {
    nodes {
      titulo
      contenido
      imagen {
        fluid {
          srcSet

        }
        
      }
    }
  }
}
  `)

  return ( 
    <>
        <h2>Titulo de Página</h2>
    </>

  );
}

export default ContenidoInicio;