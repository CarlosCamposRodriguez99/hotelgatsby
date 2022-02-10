import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundIma

const ImagenHotel = () => {

  const {image} = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "8.jpg"}) {
      sharp: childImageSharp {
        fluid {
          srcSetWebp
      }
    }
  }
}
`);

console.log(image);

return ( 
  <h1>Imagen Aqui</h1>

);
}

export default ImagenHotel;