import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';


const ContenidoContacto = () => {

  const resultado = useStaticQuery(graphql`
  query {
      allDatoCmsPagina(filter: { slug: { eq: "contacto"} }) {
            nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData
            }
          } 
      }
  }
`);

const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];

return ( 
  <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="/contacto"/>
      </div>
  </>
  
);
}

export default ContenidoContacto;