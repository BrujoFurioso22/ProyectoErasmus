import styled from "styled-components";
import React from "react";

const ContenedorImagenesArrastradas = styled.div`
  background-color: rgb(185, 185, 185);
  min-width: 200px;
  max-width: 100%;
  width: max-content;
  height: auto;
  min-height: 100px;
  display: block;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px dashed rgb(0, 0, 0);
`;

const DestinoContenedor = styled.div`
  user-select: none;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 50;
  padding: 10px 25px;
  gap: 20px;

  .destino-imagen {
    object-fit: contain;
    width: auto;
    height: 5.5rem;
    filter: drop-shadow(5px 5px 6px #515151);
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
      <DestinoContenedor>
        {imagenesEnContenedor.map((imagen) => (
          <img
            key={imagen.id}
            onClick={() => handleImageClick(imagen.id)}
            className="destino-imagen"
            src={imagen.src}
            alt={imagen.nombre}
          />
        ))}
      </DestinoContenedor>
    </ContenedorImagenesArrastradas>
  );
};

export default ContenedorDestino;
