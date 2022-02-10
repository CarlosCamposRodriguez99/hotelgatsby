import * as React from "react";
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from "../hooks/use-habitacion";
import HabitacionPreview from "../components/habitacionPreview";

const ListadoHabitaciones = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media(min)
`;

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
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}

      </ul>

    </Layout>
  )
}

export default IndexPage;