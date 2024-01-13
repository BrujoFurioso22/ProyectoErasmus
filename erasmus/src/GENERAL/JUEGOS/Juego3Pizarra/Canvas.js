import React, { useState, useRef, useEffect } from "react";
import actividad from "SOURCES/actividad1.jpg";
import styled from "styled-components";
const COLORES = [
  "#000000",
  "#FF0000",
  "#5a5a5a",
  "#0000FF",
  "#FFFF00",
  "#800080",
  "#FFA500",
  "#FFC0CB",
  "#808080",
  "#A52A2A",
  "#00FFFF",
  "#FF00FF",
];

const ContenedorTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BotonTools = styled.div`
  border: none;
  border-radius: 8px;
  background-color: blue;
  color: white;
  padding: 6px 15px;
  cursor: pointer;
`;
const ContenedorColores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CanvasApp = () => {
  const mainCanvasRef = useRef(null);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#000000");
  const [eraserMode, setEraserMode] = useState(false);
  const [colorGuard, setColorGuard] = useState("#000000");

  useEffect(() => {
    const mainCanvas = mainCanvasRef.current;
    const context = mainCanvas.getContext("2d");

    let initialX, initialY;
    let isDrawing = false;

    const preventDefault = (evt) => {
      evt.preventDefault();
    };

    const obtenerCoordenadas = (evt) => {
      const rect = mainCanvas.getBoundingClientRect();
      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;
      return { x, y };
    };

    const dibujar = (cursorX, cursorY) => {
      context.beginPath();
      context.moveTo(initialX, initialY);
      context.lineWidth = brushSize;
      context.strokeStyle = brushColor;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineTo(cursorX, cursorY);
      context.stroke();

      initialX = cursorX;
      initialY = cursorY;
    };

    const iniciarDibujo = (x, y) => {
      initialX = x;
      initialY = y;
      dibujar(initialX, initialY);
      isDrawing = true;
    };

    const detenerDibujo = () => {
      isDrawing = false;
    };

    const mouseDown = (evt) => {
      const { x, y } = obtenerCoordenadas(evt);
      iniciarDibujo(x, y);
    };

    const mouseMoving = (evt) => {
      if (!isDrawing) return;
      const { x, y } = obtenerCoordenadas(evt);
      dibujar(x, y);
    };

    const mouseUp = () => {
      detenerDibujo();
    };

    const touchStart = (evt) => {
      const touch = evt.touches[0];
      const { clientX, clientY } = touch;
      const { x, y } = obtenerCoordenadas({ clientX, clientY });
      iniciarDibujo(x, y);
    };

    const touchMove = (evt) => {
      if (!isDrawing) return;
      const touch = evt.touches[0];
      const { clientX, clientY } = touch;
      const { x, y } = obtenerCoordenadas({ clientX, clientY });
      dibujar(x, y);
    };

    const touchEnd = () => {
      detenerDibujo();
    };

    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
    mainCanvas.addEventListener("mousemove", mouseMoving);

    mainCanvas.addEventListener("touchstart", touchStart);
    mainCanvas.addEventListener("touchmove", touchMove);
    mainCanvas.addEventListener("touchend", touchEnd);
    mainCanvas.addEventListener("touchmove", preventDefault, {
      passive: false,
    });

    return () => {
      // Limpiar event listeners al desmontar el componente
      mainCanvas.removeEventListener("mousedown", mouseDown);
      mainCanvas.removeEventListener("mouseup", mouseUp);
      mainCanvas.removeEventListener("mousemove", mouseMoving);

      mainCanvas.removeEventListener("touchstart", touchStart);
      mainCanvas.removeEventListener("touchmove", touchMove);
      mainCanvas.removeEventListener("touchend", touchEnd);
      mainCanvas.removeEventListener("touchmove", preventDefault);
    };
  }, [brushSize, brushColor]);

  const BrushColor = (color) => {
    if (eraserMode === false) {
      setBrushColor(color);
      setColorGuard(color);
    }
  };

  // const guardarImagen = () => {
  //   const dataURL = mainCanvasRef.current.toDataURL();
  //   const link = document.createElement("a");
  //   link.href = dataURL;
  //   link.download = "pizarra.png";
  //   link.click();
  // };

  const guardarImagen = () => {
    const fondoCanvas = document.createElement("canvas");
    fondoCanvas.width = mainCanvasRef.current.width;
    fondoCanvas.height = mainCanvasRef.current.height;
    const fondoContext = fondoCanvas.getContext("2d");

    const fondo = new Image();

    // Reemplaza la URL con la ruta local donde has descargado la imagen
    fondo.src = actividad;

    fondo.onload = () => {
      // Calcular las dimensiones para mantener la relación de aspecto y usar "contain"
      const aspectRatio = fondo.width / fondo.height;
      const canvasAspectRatio = fondoCanvas.width / fondoCanvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (aspectRatio > canvasAspectRatio) {
        drawWidth = fondoCanvas.width;
        drawHeight = fondoCanvas.width / aspectRatio;
        offsetX = 0;
        offsetY = (fondoCanvas.height - drawHeight) / 2;
      } else {
        drawWidth = fondoCanvas.height * aspectRatio;
        drawHeight = fondoCanvas.height;
        offsetX = (fondoCanvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      // Dibujar la imagen de fondo con "contain"
      fondoContext.drawImage(fondo, offsetX, offsetY, drawWidth, drawHeight);

      // Dibujar la imagen original encima del fondo
      fondoContext.drawImage(mainCanvasRef.current, 0, 0);

      // Obtener la URL de la imagen resultante
      const dataURLConFondo = fondoCanvas.toDataURL();

      // Crear un enlace para descargar la imagen resultante
      const link = document.createElement("a");
      link.href = dataURLConFondo;
      link.download = "pizarra_con_fondo.png";

      // Simular un clic en el enlace para iniciar la descarga
      link.click();
    };
  };

  const limpiarPizarron = () => {
    const mainCanvas = mainCanvasRef.current;
    const context = mainCanvas.getContext("2d");
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  };
  const toggleBorrador = () => {
    if (eraserMode) {
      setBrushColor(colorGuard);
    } else {
      setBrushColor("#FFFFFF");
    }
    setEraserMode(!eraserMode);
  };

  return (
    <div>
      <ContenedorTools
        style={{
          gap: "30px",
          backgroundColor: "white",
          borderRadius: "0 0 15px 15px",
          padding: "10px 0",
        }}
      >
        <ContenedorTools style={{ gap: "10px" }}>
          <label style={{ fontWeight: "600" }}>Tamaño pincel {brushSize}</label>
          <input
            type="range"
            value={brushSize}
            min="1"
            max="30"
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
          />
        </ContenedorTools>
        <ContenedorTools style={{ gap: "10px" }}>
          <label style={{ fontWeight: "600" }}>Color del Pincel: </label>
          <ContenedorColores>
            {COLORES.map((color) => (
              <div
                key={color}
                className={`color-option ${
                  brushColor === color ? "selected" : ""
                }`}
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "3px",
                  cursor: "pointer",
                  border: brushColor === color ? "1px solid #FFD700" : "none",
                  borderRadius: "50%",
                  background: color,
                  boxShadow:
                    brushColor === color
                      ? "0 0 20px 1px rgba(0, 0, 0, 0.38)"
                      : "none",
                }}
                onClick={() => BrushColor(color)}
              ></div>
            ))}
          </ContenedorColores>
        </ContenedorTools>
      </ContenedorTools>

      <ContenedorTools>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            padding: "0px 25px 10px",
            backgroundColor: "white",
            marginBottom: "5px",
            borderRadius: "0 0 15px 15px",
          }}
        >
          <BotonTools onClick={guardarImagen}>Guardar Imagen</BotonTools>
          <BotonTools onClick={limpiarPizarron}>Limpiar</BotonTools>
          <BotonTools onClick={toggleBorrador}>
            {eraserMode ? "Pincel" : "Borrador"}
          </BotonTools>
        </div>
      </ContenedorTools>
      <canvas
        ref={mainCanvasRef}
        width={window.innerWidth <= 1000 ? 600 : 1000}
        height={window.innerHeight <= 768 ? 550 : 650}
        style={{
          border: "1px solid #000",
          background:
            "url('https://www.dibujos.org/img/encuentra-el-camino-a-los-ninos-b2528.jpg') center/contain no-repeat no-repeat, white",
          borderRadius: "25px",
        }}
      ></canvas>
    </div>
  );
};
