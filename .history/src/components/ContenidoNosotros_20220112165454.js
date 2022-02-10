import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
  query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
            nodes {
            titulo
            contenido
            imagen {
              fluid (maxWidth: 1200) {
                gatsbyImageData
              }
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
        <GatsbyImage image={imagen.gatsbyImageData} alt="nosotros"/>
      </div>
  </>
  
);
}

export default ContenidoNosotros;