import * as React from "react";
import { css } from '@emotion/react';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from "../hooks/use-habitacion";
import HabitacionPreview from "../components/habitacionPreview";

const IndexPage = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones);


  return (
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <h2
        css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3rem;
        `}
      >Nuestras Habitaciones
      </h2>

      <ul>
        {habitaciones.map(habitacion => (
          <HabitacionPreview 
            key=habitacion
          />
        ))}

      </ul>

    </Layout>
  )
}

export default IndexPage;
