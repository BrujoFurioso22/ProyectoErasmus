import React from "react";
import styled from "styled-components";
import { SeccionesJuegos } from "GENERAL/Principal/SeccionesJuegos";
import { ROUTES } from "CONFIG/ROUTES/paths";
const ContenedorPrincipal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  height: calc(100vh - 50px);
`;


const ContenedorJuegos = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const secciones = [
  {
    nombre: "Configuración Juegos",
    path: ROUTES.CONFIGURACION_JUEGOS,
  },
  {
    nombre: "Configuración Estudiantes",
    path: ROUTES.CONFIGURACION_ESTUDIANTES,
  },
  {
    nombre: "Reportes",
    path: ROUTES.REPORTES_PROFESOR,
  },
];
export const PrincipalProfesor = () => {
  return (
    <ContenedorPrincipal>
      <h1>Bienvenido, Profesor</h1>

      <ContenedorJuegos>
        {secciones.map((item, index) => (
          <SeccionesJuegos key={index} juego={item} conteo={index} />
        ))}
      </ContenedorJuegos>
    </ContenedorPrincipal>
  );
};
