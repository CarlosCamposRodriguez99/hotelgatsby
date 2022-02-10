import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ImagenHotel = () => {

  const {image} = useStaticQuery(graphql)
  return (  );
}

export default ImagenHotel;