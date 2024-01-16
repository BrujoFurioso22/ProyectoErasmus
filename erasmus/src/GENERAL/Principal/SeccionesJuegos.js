import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContenedorSeccion = styled.div`
  width: 300px;
  background-color: var(--color-boton);
  margin: 20px;
  border-radius: 20px;
  user-select: none;
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.4);
  }
`;

const ContenedorSeccionInterior = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  gap: 12px;
`;

const BotonJugar = styled(Link)`
  background-color: transparent;
  border: none;
  padding: 30px 5px 30px 15%;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    h3 {
      transform: translateX(50px) scale(1.1);
    }
  }
`;

const StyledH3 = styled.h3`
  transition: transform 0.3s ease;
`;

export const SeccionesJuegos = ({ juego, conteo }) => {
  return (
    <ContenedorSeccion>
      <ContenedorSeccionInterior>
        <BotonJugar to={juego.path} >
          <StyledH3>{juego.nombre}</StyledH3>
        </BotonJugar>
      </ContenedorSeccionInterior>
    </ContenedorSeccion>
  );
};
