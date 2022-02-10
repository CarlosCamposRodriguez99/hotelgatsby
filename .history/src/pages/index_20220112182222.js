import * as React from "react";
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from "../hooks/use-habitacion";

const IndexPage = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones);


  return (
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <h2>Nuestras Habitac</h2>
    </Layout>
  )
}

export default IndexPage;