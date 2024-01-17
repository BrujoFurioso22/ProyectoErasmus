import React from "react";
import styled from "styled-components";
import { SeccionesJuegos } from "GENERAL/Principal/SeccionesJuegos";
import { ROUTES } from "CONFIG/ROUTES/paths";
const ContenedorPrincipal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center ;
  padding-top: 5rem;

  flex-direction: column;
  height: calc(100vh - 50px);
`;

const ContenedorJuegos = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const juegos = [
  {
    nombre: "Direcciones",
    path: ROUTES.JUEGOS.J1,
  },
  {
    nombre: "Memoria",
    path: ROUTES.JUEGOS.J2,
  },
  {
    nombre: "Pizarrón",
    path: ROUTES.JUEGOS.J3,
  },
  {
    nombre: "Globos Colores",
    path: ROUTES.JUEGOS.J4,
  },
];
export const Principal = () => {
  return (
    <ContenedorPrincipal>
      <h1>Bienvenido, Listo para jugar?</h1>

      <ContenedorJuegos>
        {juegos.map((item, index) => (
          <SeccionesJuegos key={index} juego={item} conteo={index} />
        ))}
      </ContenedorJuegos>
    </ContenedorPrincipal>
  );
};
