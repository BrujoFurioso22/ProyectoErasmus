import "./contImgs.css";

// ContenedorDestino.js
import React from "react";

const ContenedorDestino = ({ imagenesEnContenedor, dejar, removeImage }) => {
  const handleDrop = () => {
    dejar();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageClick = (id) => {
    // Eliminar la imagen del estado imagenesEnContenedor
    const nuevasImagenes = imagenesEnContenedor.filter((imagen) => imagen.id !== id);
    removeImage(nuevasImagenes);
  };

  return (
    <div
      className="contenedor-imagenes-arrastradas"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {imagenesEnContenedor.map((imagen) => (
        <div
          key={imagen.id}
          className="destino-contenedor"
          onClick={() => handleImageClick(imagen.id)}
        >
          <img className="destino-imagen" src={imagen.src} alt={imagen.nombre} />
        </div>
      ))}
    </div>
  );
};

export default ContenedorDestino;
