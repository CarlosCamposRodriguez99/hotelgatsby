import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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

//console.log(informacion.allDatoCmsPagina.nodes);

const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

  return ( 
    <>
        <h2>{titulo}</h2>
        
        <div>
          <p>{contenido}</p>
          <StaticImage src="components/images/9.jpg" alt="a kitten/>
        </div>
      
    </>

  );
}

export default ContenidoInicio;