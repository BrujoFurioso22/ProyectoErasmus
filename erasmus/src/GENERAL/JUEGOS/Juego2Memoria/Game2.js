import React, { useEffect, useState } from "react";
import jsonImages from "./images";
import ContenedorDestino from "./ContenedorDestino";
import { ConsultaCartasJuego2 } from "CONFIG/BACKEND/Consultas/Juegos";
import styled from "styled-components";

const ContendorGlobal = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0;
`;

const ContendorContenido = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  .contendor-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
  }
  .contendor-2 {
    min-width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .cuadro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blanchedalmond;
    border: 4px outset rgba(0, 0, 0, 0.264);
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s ease all;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      border: 4px dashed rgba(0, 0, 0, 0.264);
    }
  }
  .cuadro-imagen {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

const BotonJugar = styled.button`
  padding: 10px 25px;
  outline: none;
  border: none;
  border-radius: 7px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(137, 43, 226, 0.63);
    color: aliceblue;
    box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

const ContenedorCuadrosContenedores = styled.div`
  width: min-content;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    margin: 10px 0;
  }
  .correcto {
    background-color: rgba(0, 128, 0, 0.438);
  }
  .erroneo {
    background-color: rgba(128, 0, 0, 0.438);
  }
  .contenedor-imagenes-arrastrada{
    width: 100px;
  }
`;
const ContenedorCentrados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Game2() {
  const [imagenesEnContenedor, setImagenesEnContenedor] = useState([]);
  const [ID, setID] = useState(0);
  const [iniciarJuego, setIniciarJuego] = useState(0);
  const [imagenesAleatorias, setImagenesAleatorias] = useState([]);
  const [mostrarImagenes, setMostrarImagenes] = useState(0);
  const [win, setwin] = useState("");
  const [editable, setEditable] = useState(false);
  const [mostrarVerificar, setMostrarVerificar] = useState(true);
  const [mostrarJugar, setMostrarJugar] = useState(true);
  const [haJugado, setHaJugado] = useState(0);

  const [numCartas, setNumCartas] = useState(3);

  const ConsultarNumeroCartas = async () => {
    const res = await ConsultaCartasJuego2(localStorage.getItem("id"));
    console.log(res);
    if (res.length > 0) {
      setNumCartas(res[0].numCartas);
    }
  };
  useEffect(() => {
    ConsultarNumeroCartas();
  }, []);

  const handleDragStart = (id) => {
    setID(id);
  };

  const handleDrop = () => {
    const imagenArrastrada = jsonImages.find((imagen) => imagen.id === ID);
    const verificarRep = imagenesEnContenedor.some((img) => img.id === ID);

    // console.log(ID);
    if (imagenArrastrada) {
      if (!verificarRep) {
        if (imagenesEnContenedor.length < numCartas) {
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
    obtenerImagenesAleatorias(jsonImages, numCartas);
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
    <ContendorGlobal>
      <ContendorContenido>
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
          <ContenedorCentrados>
            <span>Numero de cartas: {numCartas}</span>
          </ContenedorCentrados>
          <ContenedorCentrados>
            <BotonJugar disabled={!mostrarJugar} onClick={IniciarJuego}>
              {haJugado === 0 ? "Jugar" : "Jugar de nuevo"}
            </BotonJugar>
          </ContenedorCentrados>
          {iniciarJuego === 1 && (
            <ContenedorCuadrosContenedores>
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
              {imagenesEnContenedor.length === numCartas &&
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
            </ContenedorCuadrosContenedores>
          )}
        </div>
      </ContendorContenido>
    </ContendorGlobal>
  );
}
