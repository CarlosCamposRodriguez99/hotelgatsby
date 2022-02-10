import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
  
  const data = useStaticQuery(graphql`
  http://localhost:3000
  `);
  
  return (  
  );
}

export default useHabitaciones;