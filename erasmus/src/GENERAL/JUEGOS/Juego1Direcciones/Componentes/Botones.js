import React, { useState } from "react";
import styled from "styled-components";

const Boton = styled.div`
  width: 300px;
  height: 80px;
  background-color: rgba(238, 130, 238, 0.507);
  border: 2px dashed rgba(0, 0, 0, 0.431);
  border-radius: 25px;
  user-select: none;
  transition: all 0.3s ease;
  &.seleccionado {
    background-color: rgba(130, 238, 231, 0.507);
    transform: scale(1.2);
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const Botones = (props) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState("");
  const handleClickButton = (direccion) => {
    console.log(direccion);
    setBotonSeleccionado(direccion);
    props.setaccion(direccion);
    props.verificarAccion(direccion);
    setTimeout(() => {
      setBotonSeleccionado("");
    }, 500);
  };
  return (
    <div>
      <Boton
        disabled={props.habilitar}
        className={`${botonSeleccionado !== "" ? "seleccionado" : ""}`}
        onClick={() => handleClickButton(props.indicacion)}
      >
        {props.texto}
      </Boton>
    </div>
  );
};
