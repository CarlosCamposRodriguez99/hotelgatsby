import * as React from "react";
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from "../hooks/use-habitacion";

const IndexPage = () => {

  const habitaciones = us


  return (
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <useHabitaciones />
    </Layout>
  )
}

export default IndexPage;
