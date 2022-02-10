import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-plugin-image';

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
  query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
            nodes {
            titulo
            contenido
            imagen {
              fluid (minWidth: 1200) {
                    ...GatsbyDatoCmsFluid
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
        <GatsbyImage fluid={imagen.GatsbyDatoCmsFluid} alt="nosotros"/>
      </div>
  </>
  
);
}

export default ContenidoNosotros;