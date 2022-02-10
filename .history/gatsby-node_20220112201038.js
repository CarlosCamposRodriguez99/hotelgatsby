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
    reporter.panic('No hubo resultados', resultado.erros);
  }

  // si hay paginas, crear los archivos
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
  
  habitaciones.forEach(habitacion => {
      actions.createPages({
          path: habitacion.slug,
          component: require.resolve('./src/components/')
      })
  })

}
