exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion{
        nodes {
          slug
      } 
    }
  }
  `)

  //console.log(resultado.data.allDatoCmsHabitacion.nodes);

  if(resultado.errors) {
    reporter.panic('No hubo resultados', )
  }
}
