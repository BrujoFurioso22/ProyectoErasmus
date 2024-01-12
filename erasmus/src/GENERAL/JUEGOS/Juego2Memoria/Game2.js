import React, { useState } from "react";
import jsonImages from "./images";
import ContenedorDestino from "./ContenedorDestino";
import "./Game2.css";

const ncartas = [3, 4, 5, 6];
export function Game2() {
  const [imagenesEnContenedor, setImagenesEnContenedor] = useState([]);
  const [ID, setID] = useState(0);
  const [iniciarJuego, setIniciarJuego] = useState(0);
  const [NumeroImagenes, setNumeroImagenes] = useState(3);
  const [imagenesAleatorias, setImagenesAleatorias] = useState([]);
  const [mostrarImagenes, setMostrarImagenes] = useState(0);
  const [win, setwin] = useState("");
  const [editable, setEditable] = useState(false);
  const [mostrarVerificar, setMostrarVerificar] = useState(true);
  const [mostrarJugar, setMostrarJugar] = useState(true);
  const [haJugado, setHaJugado] = useState(0);

  const handleDragStart = (id) => {
    setID(id);
  };

  const handleDrop = () => {
    const imagenArrastrada = jsonImages.find((imagen) => imagen.id === ID);
    const verificarRep = imagenesEnContenedor.some((img) => img.id === ID);

    // console.log(ID);
    if (imagenArrastrada) {
      if (!verificarRep) {
        if (imagenesEnContenedor.length < NumeroImagenes) {
          setImagenesEnContenedor([...imagenesEnContenedor, imagenArrastrada]);
        }
      }
    }
    setID(0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const removeImage = (nuevasImagenes) => {
    setImagenesEnContenedor(nuevasImagenes);
  };

  const Resetear = () => {
    setwin("");
    setEditable(false);
    setImagenesEnContenedor([]);
    setMostrarVerificar(true);
  };

  const IniciarJuego = () => {
    Resetear();
    setIniciarJuego(1);
    obtenerImagenesAleatorias(jsonImages, NumeroImagenes);
    setMostrarImagenes(1);
    setMostrarJugar(false);
    setHaJugado(1);

    setTimeout(() => {
      setMostrarImagenes(0);
      setEditable(true);
    }, 5000);
  };

  // Función para obtener un arreglo aleatorio sin repeticiones
  const obtenerImagenesAleatorias = (arregloOriginal, cantidad) => {
    const copiaArregloOriginal = [...arregloOriginal];
    const imgAl = [];

    for (let i = 0; i < cantidad && copiaArregloOriginal.length > 0; i++) {
      const indiceAleatorio = Math.floor(
        Math.random() * copiaArregloOriginal.length
      );
      const imagenSeleccionada = copiaArregloOriginal.splice(
        indiceAleatorio,
        1
      )[0];
      imgAl.push(imagenSeleccionada);
    }
    setImagenesAleatorias(imgAl);
  };

  const VerificarJuego = () => {
    const sonIdenticos =
      JSON.stringify(imagenesEnContenedor) ===
      JSON.stringify(imagenesAleatorias);

    setwin(sonIdenticos);
    setMostrarVerificar(false);
    setMostrarJugar(true);
  };

  return (
    <div className="conetendor-global">
      <div className="contenedor-contenido">
        <div className="contendor-1">
          {jsonImages.map((imagen, index) => (
            <div
              key={index}
              className="cuadro"
              id={imagen.id}
              draggable
              onDragOver={handleDragOver}
              onDragStart={() => handleDragStart(imagen.id)}
            >
              <img
                className="cuadro-imagen"
                src={imagen.src}
                alt={imagen.nombre}
              />
            </div>
          ))}
        </div>
        <div className="contendor-2">
          <div>
            <span>Numero de cartas: </span>
            <select
              name="nim"
              id="nim"
              onChange={(e) => {
                console.log(e.target.value);
                setNumeroImagenes(e.target.value);
              }}
            >
              {ncartas.map((n) => (
                <option value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="boton-jugar"
              disabled={!mostrarJugar}
              onClick={IniciarJuego}
            >
              {haJugado === 0 ? "Jugar" : "Jugar de nuevo"}
            </button>
          </div>
          {iniciarJuego === 1 && (
            <div className="contenedor-cuadros-contenedores">
              <ContenedorDestino
                imagenesEnContenedor={imagenesEnContenedor}
                dejar={() => (editable ? handleDrop() : "")}
                idimg={ID}
                jsonImages={jsonImages}
                removeImage={removeImage}
              />
              {mostrarImagenes === 1 && (
                <div className="contenedor-imagenes-arrastradas">
                  {imagenesAleatorias.map((imagen, index) => (
                    <div
                      key={index}
                      className="destino-contenedor"
                      id={imagen.id}
                    >
                      <img
                        className="destino-imagen"
                        src={imagen.src}
                        alt={imagen.nombre}
                      />
                    </div>
                  ))}
                </div>
              )}
              {win !== "" && (
                <div
                  className={`contenedor-imagenes-arrastradas ${
                    win ? "correcto" : "erroneo"
                  }`}
                >
                  {imagenesAleatorias.map((imagen, index) => (
                    <div
                      key={index}
                      className="destino-contenedor"
                      id={imagen.id}
                    >
                      <img
                        className="destino-imagen"
                        src={imagen.src}
                        alt={imagen.nombre}
                      />
                    </div>
                  ))}
                </div>
              )}
              {imagenesEnContenedor.length == NumeroImagenes &&
                mostrarVerificar && (
                  <button
                    className="boton-jugar"
                    onClick={() => VerificarJuego()}
                  >
                    VERIFICAR
                  </button>
                )}
              {win !== "" && (
                <div>
                  <span>
                    {win ? "Has Ganado" : "Lo siento mucho, intenta de nuevo"}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
