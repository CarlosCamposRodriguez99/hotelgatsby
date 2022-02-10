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



}

export default useSeo;