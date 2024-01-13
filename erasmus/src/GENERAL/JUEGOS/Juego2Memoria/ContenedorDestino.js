import "./contImgs.css";
import styled from "styled-components";

// ContenedorDestino.js
import React from "react";

const ContenedorImagenesArrastradas = styled.div`
  background-color: rgba(185, 185, 185, 0.159);
  min-width: 200px;
  width: fit-content;
  height: 120px;
  display: flex;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px dashed rgba(152, 152, 152, 0.654);
`;

const DestinoContenedor = styled.div`
  user-select: none;
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 50;
  padding: 10px 25px;
  filter: drop-shadow(5px 5px 6px #515151);

  .destino-imagen {
    object-fit: contain;
  }
  .destino-contenedor:hover {
    cursor: not-allowed;
  }
`;

const ContenedorDestino = ({ imagenesEnContenedor, dejar, removeImage }) => {
  const handleDrop = () => {
    dejar();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageClick = (id) => {
    // Eliminar la imagen del estado imagenesEnContenedor
    const nuevasImagenes = imagenesEnContenedor.filter(
      (imagen) => imagen.id !== id
    );
    removeImage(nuevasImagenes);
  };

  return (
    <ContenedorImagenesArrastradas
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {imagenesEnContenedor.map((imagen) => (
        <DestinoContenedor
          key={imagen.id}
          onClick={() => handleImageClick(imagen.id)}
        >
          <img
            className="destino-imagen"
            src={imagen.src}
            alt={imagen.nombre}
          />
        </DestinoContenedor>
      ))}
    </ContenedorImagenesArrastradas>
  );
};

export default ContenedorDestino;
