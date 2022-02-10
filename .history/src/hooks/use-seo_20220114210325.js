import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {
  
  const data = useStaticQuery(graphql`
    query {
        datoCmsSite{
            globalSeo {
              siteName
              titleSuffix
              fallbackSeo {
                    title
                    description
              }
            }
        }
    }
`);


  return ( 
    <h1>desde seo</h1>
  
  );
}

export default useSeo;