import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
  allDatoCmsPagina(filter: { slug: {eq: "inicio"}}) {
    edges{
      node {
        titulo
        contenido
        imagen {
          url
        }
      }
    }
  }
}
`);

//console.log(informacion.allDatoCmsPagina.nodes);

const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.edges[0]

  return ( 
    <>
        <h2>{titulo}</h2>
        
        <div>
          <p>{contenido}</p>
          <GatsbyImage image={imagen.url} alt="inicio"/>
        </div>
      
    </>

  );
}

export default ContenidoInicio;