import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  
  
  `)

  return ( 
    <>
        <h2>Titulo de Página</h2>
    </>

  );
}

export default ContenidoInicio;