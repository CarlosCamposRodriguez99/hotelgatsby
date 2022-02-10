import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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


return (  );
}

export default ImagenHotel;