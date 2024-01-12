import React, { useState } from "react";

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
    <div className="contenedor-boton">
      <button
        disabled={props.habilitar}
        className={`boton ${botonSeleccionado !== "" ? "seleccionado" : ""}`}
        onClick={() => handleClickButton(props.indicacion)}
      >
        {props.texto}
      </button>
    </div>
  );
};
