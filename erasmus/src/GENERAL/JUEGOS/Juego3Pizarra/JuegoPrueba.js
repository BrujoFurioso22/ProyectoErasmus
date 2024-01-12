import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

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
];
const defaultColor = "white";

export function JuegoPrueba() {
  const canvasRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState();
  const [brushColor, setBrushColor] = useState("#000000");
  const [lastBrushColor, setLastBrushColor] = useState("#000000");
  const [brushWidth, setBrushWidth] = useState(4);
  const [toggleBorrador, setToggleBorrador] = useState(true);

  const ContenedorColor = () => {
    return COLORS.map((color) => (
      <div
        key={color}
        className={`color-option ${brushColor === color ? "selected" : ""}`}
        style={{ background: color }}
        onClick={() => cambiarColor(color)}
      ></div>
    ));
  };

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: defaultColor,
      width: 950,
      height: 600,
      isDrawingMode: true,
    });
    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [canvasRef]);

  const cambiarGrosor = (grosor) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = grosor;
      setBrushWidth(grosor);
      fabricCanvas.requestRenderAll();
      // fabricCanvas.renderAll.bind(fabricCanvas);
    }
  };

  const cambiarColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setBrushColor(color);
      if (!toggleBorrador) {
        setLastBrushColor(color);
      }
      fabricCanvas.requestRenderAll();
      // fabricCanvas.renderAll.bind(fabricCanvas);
    }
  };

  const descargarPizarron = () => {
    const pngData = fabricCanvas.toDataURL("png");
    const linkDescarga = document.createElement("a");
    const fileName = `pizarron-${Math.random()
      .toString()
      .replace(".", "")}.png`;

    linkDescarga.href = pngData;
    linkDescarga.download = fileName;
    linkDescarga.click();
  };

  const borrarPizarron = () => {
    if (fabricCanvas) {
      fabricCanvas.clear();
      fabricCanvas.backgroundColor = defaultColor;
      fabricCanvas.isDrawingMode = true;
    }
  };

  const toggleBorradorLapiz = () => {
    if (fabricCanvas) {
      console.log(toggleBorrador);
      if (toggleBorrador) {
        cambiarColor(defaultColor);
        setToggleBorrador(!toggleBorrador);

        // setToggleBorrador(false);
      } else {
        cambiarColor(lastBrushColor);
        setToggleBorrador(!toggleBorrador);

        // setToggleBorrador(true);
      }
    }
  };

  return (
    <div>
      <div className="color-palette">{ContenedorColor()}</div>
      <input
        type="range"
        onChange={(e) => cambiarGrosor(e.target.value)}
        value={brushWidth}
        min={3}
        max={15}
      ></input>
      <button onClick={() => descargarPizarron()}>Descargar Pizarron</button>
      <button onClick={() => borrarPizarron()}>Eliminar</button>
      <button onClick={() => toggleBorradorLapiz()}>{toggleBorrador?"Borrador":"Lapiz"}</button>

      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
