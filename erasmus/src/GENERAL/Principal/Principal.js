import React from "react";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import styled from "styled-components";
import { SeccionesJuegos } from "GENERAL/Principal/SeccionesJuegos";
import { ROUTES } from "CONFIG/ROUTES/paths";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
const ContenedorPrincipal = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
`;

const ContenedorHome = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
`;

const ContenedorJuegos = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContenedorSecciones = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10%;
`;

const juegos = [
  {
    nombre: "JUEGO 1",
    path: ROUTES.JUEGOS.J1,
  },
  {
    nombre: "JUEGO 2",
    path: ROUTES.JUEGOS.J2,
  },
  {
    nombre: "JUEGO 3",
    path: ROUTES.JUEGOS.J3,
  },
  {
    nombre: "JUEGO 4",
    path: ROUTES.JUEGOS.J4,
  },
];
export const Principal = () => {
  return (
    <ContenedorPrincipal>
      <Sidebar />
      <ContenedorHome>
        <Header />
        <ContenedorSecciones>
          <h1>Bienvenido, Listo para jugar?</h1>

          <ContenedorJuegos>
            {juegos.map((item, index) => (
              <SeccionesJuegos key={index} juego={item} conteo={index} />
            ))}
          </ContenedorJuegos>
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};
