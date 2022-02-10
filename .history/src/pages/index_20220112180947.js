import * as React from "react";
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones

const IndexPage = () => (
  <Layout>
    <ImagenHotel />

    <ContenidoInicio />
  </Layout>
)

export default IndexPage;
