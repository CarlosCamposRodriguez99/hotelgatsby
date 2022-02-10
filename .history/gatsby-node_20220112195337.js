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

  console.log(resultado);
}
