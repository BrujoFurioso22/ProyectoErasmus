import React, { useState, useRef } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import styled from "styled-components";
import "./lienzo.css";

const COLORS = [
  "#000000", // Black
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#800080", // Purple
  "#FFA500", // Orange
  "#FFC0CB", // Pink
  "#808080", // Gray
  "#A52A2A", // Brown
  "#00FFFF", // Cyan
  "#FF00FF", // Magenta
  "#FF00Fd", // Magenta
];

export const JuegoLienzo = () => {
  const [images, setImages] = useState([]);
  const [lines, setLines] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(3);
  const [draggableImages, setDraggableImages] = useState(true);
  const [imageSize, setImageSize] = useState(200); // Nuevo estado para el tamaño de las imágenes
  const isDrawing = useRef(false);
  const linePoints = useRef([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        setImages([...images, { img, draggable: draggableImages }]);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.evt;
    linePoints.current = [offsetX, offsetY];
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.evt;
    const newPoints = [...linePoints.current, offsetX, offsetY];
    setLines([
      ...lines,
      { points: newPoints, color: brushColor, size: brushSize },
    ]);
    linePoints.current = newPoints;
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    setUndoHistory([]);
  };

  const handleUndo = () => {
    if (lines.length === 0) return;
    const updatedLines = [...lines];
    const lastLine = updatedLines.pop();
    setLines(updatedLines);
    setUndoHistory([...undoHistory, lastLine]);
  };

  const handleDelete = () => {
    setLines([]);
    setUndoHistory([]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleRedo = () => {
    if (undoHistory.length === 0) return;
    const updatedUndoHistory = [...undoHistory];
    const lastLine = updatedUndoHistory.pop();
    setLines([...lines, lastLine]);
    setUndoHistory(updatedUndoHistory);
  };

  const handleBrushColorChange = (color) => {
    setBrushColor(color);
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(Number(e.target.value));
  };

  const handleToggleDraggable = () => {
    setDraggableImages(!draggableImages);
    setImages((prevImages) => {
      return prevImages.map((image) => {
        return { ...image, draggable: !draggableImages };
      });
    });
  };

  const handleImageSizeChange = (e) => {
    setImageSize(Number(e.target.value));
  };

  const renderColorPalette = () => {
    return COLORS.map((color) => (
      <div
        key={color}
        className={`color-option ${brushColor === color ? "selected" : ""}`}
        style={{ background: color }}
        onClick={() => handleBrushColorChange(color)}
      ></div>
    ));
  };

  const ContenedorPadre = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin: 0 20px;
    height: auto;
  `;

  const ContenedorColoresEInputs = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;

  const ContenedorOpciones = styled.div`
    display: flex;
    gap: 15px;
    margin: 0 20px;
  `;

  const ContenedorRango = styled.div`
    display: flex;
    gap: 3px;
  `;

  const BotonOpcion = styled.button`
    background-color: rgba(0, 0, 0, 0.68);
    padding: 5px 15px;
    text-decoration: none;
    border-radius: 8px;
    border: solid 1px gray;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    color: white;
    i {
      font-size: 20px;
    }

    &:hover {
      border: solid 1px white;
      background-color: #1c0b2b;
      color: white;
      transform: scale(1.1);
      box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.68);
    }
  `;

  return (
    <ContenedorPadre onDrop={handleDrop} onDragOver={handleDragOver}>
      <h3>Arrastra y suelta imágenes aquí</h3>
      <ContenedorOpciones>
        <BotonOpcion onClick={handleUndo}>
          <i class="bi bi-arrow-counterclockwise"></i> Rehacer
        </BotonOpcion>
        <BotonOpcion onClick={handleDelete}>DELETE</BotonOpcion>
        <BotonOpcion onClick={handleRedo}>REDO</BotonOpcion>
        <BotonOpcion onClick={handleToggleDraggable}>
          {draggableImages ? "Disable Drag" : "Enable Drag"}
        </BotonOpcion>
      </ContenedorOpciones>
      <ContenedorColoresEInputs>
        <div className="color-palette">{renderColorPalette()}</div>
        <ContenedorRango>
          <label htmlFor="brush-size">Tamaño:</label>
          <input
            type="range"
            id="brush-size"
            min={1}
            max={9}
            value={brushSize}
            onChange={handleBrushSizeChange}
          />
        </ContenedorRango>
        <ContenedorRango>
          <label htmlFor="image-size">IMG tamaño:</label>
          <input
            type="range"
            id="image-size"
            min={100}
            max={2500}
            step={10}
            value={imageSize}
            onChange={handleImageSizeChange}
          />
        </ContenedorRango>
      </ContenedorColoresEInputs>
      <div className="canvas-container">
        <Stage
          className="contenedor-lienzo"
          width={950} // Usa el ancho total de la ventana
          height={500}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            {images.map((img, index) => (
              <Image
                key={`image-${index}`}
                image={img.img}
                draggable={img.draggable}
                //onClick={() => handleDeleteImage(index)}
                onDblClick={() => handleDeleteImage(index)}
                onTap={() => handleDeleteImage(index)}
                width={imageSize}
                height={imageSize}
              />
            ))}
            {lines.map((line, index) => (
              <Line
                key={`line-${index}`}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.size}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </ContenedorPadre>
  );
};
