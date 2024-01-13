import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "CONFIG/ROUTES/paths"

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 10% 0;
  h1 {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }
`;
const Boton = styled(Link)`
  padding: 12px 25px;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 20px;
  text-decoration: none;
`;

export const PaginaSinAsignacion = () => {
  return (
    <Contenedor>
      <h2>
        No tiene ningun profesor asignado, consulte con su profesor para poder
        solucionar el problema
      </h2>
      <Boton to={ROUTES.PRINCIPAL}>Regresar</Boton>
    </Contenedor>
  );
};