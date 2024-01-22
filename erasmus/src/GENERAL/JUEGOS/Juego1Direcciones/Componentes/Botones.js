import React, { useState, useRef } from "react";
import styled from "styled-components";

const Boton = styled.div`
  width: 150px;
  min-height: 100px;
  height: auto;
  background-color: var(--color-boton);
  color: white;
  border: 2px dashed var(--color-p);
  border-radius: 25px;
  user-select: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &.seleccionado {
    background-color: var(--color-p);
    transform: scale(1.2);
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  img {
    width: 100px;
    object-fit: contain;
    animation: anim 1s ease;

    @keyframes anim {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  span {
    font-weight: 600;
  }
`;

export const Botones = ({
  habilitar,
  texto,
  indicacion,
  setaccion,
  verificarAccion,
  imagen,
  refe,
}) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState("");
  const handleClickButton = (direccion) => {
    console.log(direccion);
    setBotonSeleccionado(direccion);
    setaccion(direccion);
    verificarAccion(direccion);
    setTimeout(() => {
      setBotonSeleccionado("");
    }, 500);
  };

  return (
    <div>
      <Boton
        ref={refe}
        id={imagen.nombreimagen}
        disabled={habilitar}
        className={`button-click ${botonSeleccionado !== "" ? "seleccionado" : ""}`}
        onClick={() => handleClickButton(indicacion.nombreimagen)}
      >
        <span style={{textTransform: "uppercase"}}>{texto.nombreimagen}</span>
        {!habilitar && <img src={imagen.rutaimagen} alt="img" />}
      </Boton>
    </div>
  );
};
