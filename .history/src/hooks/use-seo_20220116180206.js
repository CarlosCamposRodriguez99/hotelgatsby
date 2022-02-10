
import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {
  
  const data = useStaticQuery(graphql`
    query {
        datoCmsSite{
            globalSeo {
              titleSuffix
              fallbackSeo {
                    title
                    description
              }
            }
        }
    }
`);

  return data.datoCmsSite.globalSeo;

}

export default useSeo;