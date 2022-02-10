import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
  
  const data = useStaticQuery(graphql`
  query {
    allDatoCmsHabitacion {
      nodes {
        titulo
        id
        slug
        contenido
        imagen {
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
      }
    }
  }
}
`);

  console.log(data);
  
  return (  
    <p>desde hook</p>
  );
}

export default useHabitaciones;